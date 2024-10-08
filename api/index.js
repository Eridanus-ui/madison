import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js"
import cookieParser from "cookie-parser";

// _Initialize dotenv
dotenv.config();

// _Create a mongo DB connection
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Server connected to DataBase");
  })
  .catch((err) => {
    console.log(err);
  });

const _dirname = path.resolve();

// _Initialize an express app
const app = express();

// _Enable CORS middleware
app.use(cors());

// _Needed when sending data to the server as JSON
app.use(express.json());

// _Add a listener to the server.
app.listen(3000, () => {
  console.log("Server is running on port at http://localhost:3000");
});

// Middleware to parse cookies
app.use(cookieParser());

// _import the routes
app.use("/api/user", userRouter);

app.use(express.static(path.join(_dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(_dirname, "client", "dist", "index.html"));
});

// _Create middleware to handle errors
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
