"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const get_all_tokens_controller_1 = __importDefault(require("../../controllers/get/get-all-tokens-controller"));
const getAllTokensRouter = (0, express_1.Router)();
getAllTokensRouter.get("/", get_all_tokens_controller_1.default);
exports.default = getAllTokensRouter;
