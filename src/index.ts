import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import "./db/index";
import getUserRouter from "./routes/get/get-user-route";
import getTokenRouter from "./routes/get/get-token-route";
import getTokenCommentsRouter from "./routes/get/get-token-comments-route";
import getTokenCommentsCountRouter from "./routes/get/get-token-comments-count-route";
import getAllTokensRouter from "./routes/get/get-all-tokens-route";
import getUsersTokensRouter from "./routes/get/get-users-tokens-route";
import addCommentRouter from "./routes/post/add-comment-route";
import createTokenRouter from "./routes/post/create-token-route";
import findTokenRouter from "./routes/get/find-token-route";

dotenv.config();
const PORT = process.env.PORT ?? 8000;

const app = express();

// @todo Configure cors at the end of the project.
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

// GET Routes.
app.use("/get-user", getUserRouter);
app.use("/get-token", getTokenRouter);
app.use("/get-token-comments", getTokenCommentsRouter);
app.use("/get-token-comments-count", getTokenCommentsCountRouter);
app.use("/get-all-tokens", getAllTokensRouter);
app.use("/get-users-tokens", getUsersTokensRouter);
app.use("/search", findTokenRouter);

// POST Routes.
app.use("/add-comment", addCommentRouter);
app.use("/create-token", createTokenRouter);

app.get("/", function (req, res) {
  res.send({
    status: 200,
    msg: "OK",
    data: ["Hola, amigo!"],
  });
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}.`);
});
