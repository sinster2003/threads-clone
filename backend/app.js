const express = require("express");
require("express-async-errors");
const connectDb = require("./db/connectDb");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/userRoutes");
const postRouter = require("./routes/postRoutes");
const errorHandler = require("./middleware/errorHandler");

/* connecting to the mongodb database */
connectDb();

const app = express();

/* middlewares */
app.use(express.json()); // to parse json to js in the req.body
app.use(express.urlencoded({extended: true})); // to parse form data into js
app.use(cookieParser()); // extract cookie data from the http requests

/* routes */
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);

/* error handler */
app.use(errorHandler);

module.exports = app;