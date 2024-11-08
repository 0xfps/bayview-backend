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
function getTokenCommentsCountController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { tokenAddress } = req.body;
        if (!tokenAddress) {
            const response = {
                status: 400,
                msg: "Not found",
                data: {
                    count: 0
                }
            };
            res.send(response);
        }
        const tokensComment = yield comments_1.default.find({ tokenAddress });
        const response = {
            status: 200,
            msg: "Comments found.",
            data: {
                count: tokensComment ? tokensComment.length : 0
            }
        };
        res.send(response);
    });
}
exports.default = getTokenCommentsCountController;
