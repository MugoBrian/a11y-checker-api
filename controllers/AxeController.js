const puppeteer = require("puppeteer");
const { axe } = require("axe-core");
// const axeChecker = async (input) => {
//   try {
//   } catch (error) {}
// };

const axeCodeController = async (req, res) => {
  try {
    // HTML content from req.body
    const html = req.body.userInput;

    // Launch Puppeteer
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    // Load HTML into page
    await page.goto(`data:text/html;charset=UTF-8,${html}`, {
      waitUntil: "networkidle0",
    });

    // Inject axe-core script into page
    await page.addScriptTag({ path: require.resolve("axe-core") });
    const bodyParser = require("body-parser");
    // Run axe check and get results
    const axeResults = await page.evaluate(() => axe.run());

    // Close the browser
    await browser.close();

    // Send axe results as response
    res.json(axeResults);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("An error occurred while running the accessibility test.");
  }
};

const axeUrlController = async (req, res) => {
  const url = req.body.userInput;
  console.log(url);
  // Launch a new browser instance
  const browser = await puppeteer.launch({ headless: "new" });

  // Create a new page
  const page = await browser.newPage();

  // Navigate to the specified URL
  // setTimeout(()=>{},)
  console.time('The Process Navigation To Url');
  try {
    await page.goto(url, {
      waitUntil: "networkidle0",
    });
  } catch (err) {
    console.log(err);
  }

  console.timeEnd('The Process Navigation To Url');

  // Inject the axe-core script into the page
  try {
    await page.addScriptTag({
      path: require.resolve("axe-core"),
    });
  } catch (err) {
    console.log(err);
  }

  // Run the accessibility tests
  console.time("Run the accessibility tests");
  const results = await page.evaluate(async () => {
    return await axe.run();
  });
  console.timeEnd("Run the accessibility tests");
  // Close the browser
  await browser.close();

  // Return the test results

  return res.json(results);
};

module.exports = { axeCodeController, axeUrlController };
