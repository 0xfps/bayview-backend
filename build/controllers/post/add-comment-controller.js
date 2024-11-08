"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const comments_1 = __importDefault(require("../../db/schemas/comments"));
function addCommentController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { address, tokenAddress, comment } = req.body;
        if (!address) {
            const response = {
                status: 400,
                msg: "Invalid address"
            };
            res.send(response);
            return;
        }
        const date = new Date().getTime();
        const commentId = date * Math.floor(Math.random() * 1000);
        const newComment = yield comments_1.default.create({
            commentId,
            tokenAddress,
            address,
            comment,
            date
        });
        if (!newComment) {
            const response = {
                status: 403,
                msg: "There was an error adding the comment."
            };
            res.send(response);
            return;
        }
        const response = {
            status: 200,
            msg: "Comment added!"
        };
        res.send(response);
    });
}
exports.default = addCommentController;
