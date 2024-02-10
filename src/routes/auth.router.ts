import express from "express";
// import { CustomError } from "../utils/errors";
// import ResponseCodes from "../utils/responsecodes";

const Router = express.Router();

Router.get("/test", function (req, res) {
  res.send("working");
  //   res.send("asdada");
  // throw new CustomError("FAIL  sdfs ED", ResponseCodes.failed);
}
     

);

export default Router;