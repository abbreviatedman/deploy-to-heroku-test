const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
app.use(cors());

app.get("/", (_, response) => {
  response.send("Hello!");
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
