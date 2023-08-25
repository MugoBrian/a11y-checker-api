const aChecker = require("accessibility-checker");
const puppeteer = require("puppeteer");
const dataFormat = require("../services/data.service");

const ibmCodeController = async (req, res) => {
  try {
    const code = req.body.userInput;
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    page.setContent(code);

    await aChecker.getCompliance(page, "/scans", (data) => {
      const results = dataFormat(data);
      return res.json(results);
    });
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

const ibmUrlController = async (req, res) => {
  try {
    const url = req.body.userInput;
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: "networkidle0" });

    await aChecker.getCompliance(page, "/scans", (data) => {
      const results = dataFormat(data);
      return res.json(results);
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  ibmCodeController,
  ibmUrlController,
};
