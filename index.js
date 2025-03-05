const express = require("express");
const cors = require("cors");
const app = express();

const {readdirSync} = require("fs");

app.use(cors());
readdirSync("./routes").map((file) =>
  app.use("/", require("./routes/" + file))
);

app.use(cors())
app.get("/", (req, res) => {
  res.status(200).send({
    success: true,
    message: "Welcome to Orion API",
    author: "RyuDev",
  })
})

require("dotenv").config();
const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})