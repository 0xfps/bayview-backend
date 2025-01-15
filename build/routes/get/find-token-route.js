"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const find_token_controller_1 = __importDefault(require("../../controllers/get/find-token-controller"));
const findTokenRouter = (0, express_1.Router)();
findTokenRouter.get("/:tokenSearchString", find_token_controller_1.default);
exports.default = findTokenRouter;
