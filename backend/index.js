//packages
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

//mongoDB connection
const MONGO_URL = "mongodb://127.0.0.1:27017/progress-tracker";

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Mongodb connection successfull");
  })
  .catch((error) => {
    console.log("Error While connecting to DB", error);
  });
//middlewares
app.use(cors());
app.use(express.json());

//files
const taskRoute = require("./routes/tasks");
app.use("/api/tasks", taskRoute);

//Test route
app.get("/", (req, res) => {
  res.send("Welcome to the Home Route");
});

//start server
app.listen(4000, () => {
  console.log("Server Running at the port 4000");
});
