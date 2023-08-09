const express = require("express");
const errorMiddleWare = require("./middleware/error");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());

app.use(cookieParser());

//route imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);

app.use(errorMiddleWare);

// Middleware for errors

module.exports = app;
