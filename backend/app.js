const express = require("express");
const connectDb = require("./db/connectDb");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/userRoutes");

/* connecting to the mongodb database */
connectDb();

const app = express();

/* middlewares */
app.use(express.json()); // to parse json to js in the req.body
app.use(express.urlencoded()); // to parse form data into js
app.use(cookieParser()); // extract cookie data from the http requests

/* routes */
app.use("/api/users", userRouter);

module.exports = app;