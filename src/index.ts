import express from "express";
import { config } from "dotenv";
import { connnectRabbit } from "./producer";
import { consume } from "./consumer";

const main = async () => {
  config();

  const app = express();
  const port = process.env.PORT;

  const channel = await connnectRabbit();

  if (channel) {
    await consume("create_category", channel);
  }

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

main();
