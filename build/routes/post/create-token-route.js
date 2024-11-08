"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const create_token_controller_1 = __importDefault(require("../../controllers/post/create-token-controller"));
const createTokenRouter = (0, express_1.Router)();
createTokenRouter.post("/", create_token_controller_1.default);
exports.default = createTokenRouter;
