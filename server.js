const express = require("express");

const bodyParser = require("body-parser");

const axeRoutes = require("./routes/axeRoutes");
const pa11yRoutes = require("./routes/pa11yRoutes");
const ibmRoutes = require("./routes/ibmRoutes");

const app = express();
const port = 3000;

app.use(express.json());
app.use(bodyParser.text({ type: "text/html" }));

//Routes

app.use("/api/accessibility-check/axe", axeRoutes);
app.use("/api/accessibility-check/pa11y", pa11yRoutes);
app.use("/api/accessibility-check/ibm", ibmRoutes);


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
