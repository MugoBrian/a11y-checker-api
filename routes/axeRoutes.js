const express = require("express");
const router = express.Router();
const {
  axeCodeController,
  axeUrlController,
} = require("../controllers/AxeController");

router.post("/code", axeCodeController);
router.post("/url", axeUrlController);

module.exports = router;
