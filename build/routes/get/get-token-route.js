"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const get_token_controller_1 = __importDefault(require("../../controllers/get/get-token-controller"));
const getTokenRouter = (0, express_1.Router)();
getTokenRouter.get("/:tokenAddress", get_token_controller_1.default);
exports.default = getTokenRouter;
