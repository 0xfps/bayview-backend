"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const get_users_tokens_controller_1 = __importDefault(require("../../controllers/get/get-users-tokens-controller"));
const getUsersTokensRouter = (0, express_1.Router)();
getUsersTokensRouter.get("/", get_users_tokens_controller_1.default);
exports.default = getUsersTokensRouter;
