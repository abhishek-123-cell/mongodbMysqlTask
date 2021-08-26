let express = require("express"),
  //   mongoose = require("mongoose"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  dbConfig = require("./config/mongoose");

// Setting up express
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());

// Api root
const userRoute = require("./routes/index");
app.use("/endpoint", userRoute);

// Create port
const port = process.env.PORT || 8084;

// Conectting port
const server = app.listen(port, () => {
  console.log("Port connected to: " + port);
});

// Index Route
app.get("/", (req, res) => {
  res.send("invaild endpoint");
});
