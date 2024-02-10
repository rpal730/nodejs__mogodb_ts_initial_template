import "dotenv/config";
import mongoose from "mongoose";

const mongoUri: string = process.env.MONGO_URI ?? "";

const options: mongoose.ConnectOptions = {};

console.log("Here is mongo URL => " + mongoUri);

export { mongoUri, options };