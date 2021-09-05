/** packages */
const express = require("express");
const config = require("config");
//const bodyParser = require("body-parser");

/** app configuration */
const app = express();
const port = config.get("server-port");
/**
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded(
    { extended: true }
)

const ipFn = require("./middleware/getIpAddress");
app.use("*", ipFn);

app.use(jsonParser);
app.use(urlEncodedParser);
 */

//product routes loading
const productRoutes = require("./routes/product.route");
productRoutes(app);

/** Methods */

app.get("/", (req, res, next) => {
    res.send("Welcome to e-commerce rest api.");
});

app.listen(port, () => {
    console.log("Server is running...")
});

