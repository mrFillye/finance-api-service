import express from "express";
import { config } from "dotenv";

config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Welcome to my server!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
