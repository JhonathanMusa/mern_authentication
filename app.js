const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwtSecret = process.env.JWT_SECRET;

const app = express();

app.use(cors());
app.use(morgan("tiny"));

// server static files from react app
app.use(express.static(path.join(__dirname, "react/build")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(jwtSecret));

/* app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/frontend/build/index.html'))
}) */
app.get("/", (req, res) => {
    res.send("Working")
})

module.exports = app;
