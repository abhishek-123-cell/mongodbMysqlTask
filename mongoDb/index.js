// let express = require("express"),
//   createError = require("http-errors"),
//   //   mongoose = require("mongoose"),
//   cors = require("cors"),
//   bodyParser = require("body-parser"),
//   dbConfig = require("./config/mongoose");

// // Setting up express
// const app = express();
// app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: false,
//   })
// );
// app.use(cors());

// // Api root
// const userRoute = require("./routes/index");
// app.use("/endpoint", userRoute);

// // Create port
// const port = process.env.PORT || 8084;

// // Conectting port
// const server = app.listen(port, () => {
//   console.log("Port connected to: " + port);
// });

// // Index Route
// app.get("/", (req, res) => {
//   res.send("invaild endpoint");
// });

// // Handling Errors
// app.use((err, req, res, next) => {
//   // console.log(err);
//   err.statusCode = err.statusCode || 500;
//   err.message = err.message || "Internal Server Error";
//   res.status(err.statusCode).json({
//     message: err.message,
//   });
// });
const express = require("express");
const bodyParser = require("body-parser");
const dbConfig = require("./config/mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");

// Express settings
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());

app.use(cookieParser());
app.use(
  session({
    secret: "positronx",
    saveUninitialized: false,
    resave: false,
  })
);

// Define PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});
