const express = require("express");
const cors = require("cors");
const connectDB = require("./config/initDB.js");
const getQuestion = require("./routes/getQuestion.js");

const app = express();
connectDB();

app.use(cors());

const PORT = process.env.PORT || 5000;

app.use("/", getQuestion);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});