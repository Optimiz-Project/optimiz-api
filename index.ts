import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(cookieParser());
app.use(express.json());

app.listen(3000, () =>
  console.log(`⚡️[server]: Server is running at https://localhost:3000`)
)