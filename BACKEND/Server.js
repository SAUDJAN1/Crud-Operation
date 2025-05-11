import express from "express";
import dotenv from "dotenv";
import chalk from "chalk";
import router from "./Routes/user.routes.js";
import connDB from "./Mongoose/mongoDb.js";
import cors from "cors";
dotenv.config({ path: ".env" });
const app = express();
const Port = process.env.PORT || 1001;
app.use(
  cors({
    methods: ["GET,POST,DELETE,PUT"],
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use("/mern/api", router);

connDB().then(() => {
  app.listen(Port, () => {
    console.log(chalk.bgGreen.white("Server is Running at Port :" + `${Port}`));
  });
});
