"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const get_token_comments_count_controller_1 = __importDefault(require("../../controllers/get/get-token-comments-count-controller"));
const getTokenCommentsCountRouter = (0, express_1.Router)();
getTokenCommentsCountRouter.get("/:tokenAddress", get_token_comments_count_controller_1.default);
exports.default = getTokenCommentsCountRouter;
