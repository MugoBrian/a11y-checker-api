const pa11y = require("pa11y");
const puppeteer = require("puppeteer");

const pa11yUrlController = async (req, res) => {
  const url = req.body.userInput;
  try {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    await page.goto(url, {
      waitUntil: "networkidle0",
    });

    const results = await pa11y(page);

    await browser.close();

    return res.json(results);

    // await
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "An error occurred during testing." });
  }
};

const pa11yCodeController = async (req, res) => {
  const userInput = req.body.userInput;
  try {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    await page.setContent(userInput);

    const results = await pa11y(page, { browser: browser });

    await browser.close();

    return res.json(results);

    // await
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "An error occurred during testing." });
  }
};

module.exports = {
  pa11yCodeController,
  pa11yUrlController,
};
