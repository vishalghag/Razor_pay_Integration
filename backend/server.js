require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/payment", require("./routes/payment"));

app.listen(5500, () => {
  console.log("Server started on port 5500");
});
