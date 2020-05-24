const express = require("express");
const cors = require("cors");
const connectDB = require("./config/initDB.js");
const getQuestion = require("./routes/getQuestion.js");

const app = express();
app.use(express.json({ extended: true }));
app.use(cors());
connectDB();


const PORT = process.env.PORT || 5000;

app.use("/", getQuestion);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});