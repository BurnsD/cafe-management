const express = require("express");
var cors = require("cors");
const connection = require("./connection");
const productRoute = require('./routes/product');
const userRoute = require("./routes/user");
const categoryRoute = require("./routes/category");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/user", userRoute);
app.use('/category', categoryRoute);
app.use('/product', productRoute);

module.exports = app;
