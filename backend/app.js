const express = require("express");
const errorMiddleWare = require("./middleware/error");

const app = express();
app.use(express.json());

//route imports
const product = require("./routes/productRoute");
app.use("/api/v1", product);

app.use(errorMiddleWare)

// Middleware for errors

module.exports = app;
