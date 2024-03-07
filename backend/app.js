const express = require("express");
const errorMiddleWare = require("./middleware/error");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

const app = express();

// Use built-in express.json() instead of bodyParser
app.use(express.json());

app.use(cookieParser());
app.use(express.urlencoded({ extended: true })); // Use express.urlencoded() instead of bodyParser

// Use express-fileupload instead of fileUpload
app.use(fileUpload());

// Route imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoutes");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment)

app.use(errorMiddleWare);

module.exports = app;
