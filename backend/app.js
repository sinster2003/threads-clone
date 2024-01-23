const express = require("express");
require("express-async-errors");
const cors = require("cors");
const connectDb = require("./db/connectDb");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/userRoutes");
const postRouter = require("./routes/postRoutes");
const path = require("path");
const errorHandler = require("./middleware/errorHandler");
const {v2: cloudinary} =  require('cloudinary');
const { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_NAME } = require('./utils/config');

/* connecting to the mongodb database */
connectDb();

const app = express();
          
cloudinary.config({ 
    cloud_name: CLOUDINARY_NAME, 
    api_key: CLOUDINARY_API_KEY, 
    api_secret: CLOUDINARY_API_SECRET 
});

/* middlewares */
app.use(express.json({limit: "50mb"})); // to parse json to js in the req.body
app.use(express.urlencoded({extended: true, limit: "50mb"})); // to parse form data into js
app.use(cookieParser()); // extract cookie data from the http requests
app.use(cors());
app.use(express.static("dist")); // handles the request of static files

/* routes */
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

/* error handler */
app.use(errorHandler);

module.exports = app;