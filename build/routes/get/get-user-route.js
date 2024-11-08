"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const get_user_controller_1 = __importDefault(require("../../controllers/get/get-user-controller"));
const getUserRouter = (0, express_1.Router)();
getUserRouter.get("/:address", get_user_controller_1.default);
exports.default = getUserRouter;
