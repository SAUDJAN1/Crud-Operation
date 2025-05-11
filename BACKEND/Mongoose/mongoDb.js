import chalk from "chalk";
import mongoose from "mongoose";
const connDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB_URL);
    console.log(chalk.bgGreen.white(`Connected to : ${conn.connection.host}`));
  } catch (error) {
    console.log(chalk.bgRed.white("Connection Failed", `${error}`));
    process.exit(1);
  }
};
export default connDB;
