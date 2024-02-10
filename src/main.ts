import mongoose from "mongoose";
import express from "express";
import "dotenv/config";
import * as dbConfig from "./config/db";
import authRouter from "./routes/auth.router";
import ErrorController from "./controllers/error.controller";

const app = express();

app.use(express.json());

mongoose.set("strictQuery", false);
mongoose
  .connect(dbConfig.mongoUri, dbConfig.options)
  .then(() => {
    console.log("MongoDB database connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/auth", authRouter);

app.get("/hello", (req, res) => {
  res.send("World");
});

const errorController = new ErrorController();
app.use(errorController.handleRequestErrors);

app.listen(3000);
console.log("Server started at port 3000");