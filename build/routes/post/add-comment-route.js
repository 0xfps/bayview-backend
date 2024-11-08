"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const add_comment_controller_1 = __importDefault(require("../../controllers/post/add-comment-controller"));
const addCommentRouter = (0, express_1.Router)();
addCommentRouter.post("/", add_comment_controller_1.default);
exports.default = addCommentRouter;
