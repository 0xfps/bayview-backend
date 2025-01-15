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
const tokens_1 = __importDefault(require("../../db/schemas/tokens"));
function findTokenController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { tokenSearchString } = req.params;
        if (!tokenSearchString) {
            const response = {
                status: 400,
                msg: "Invalid token or chain.",
            };
            res.send(response);
            return;
        }
        const tokens = yield tokens_1.default
            .find({
            $or: [
                { name: { $regex: tokenSearchString, $options: "i" } },
                { ticker: { $regex: tokenSearchString, $options: "i" } },
            ],
        })
            .limit(20);
        if (!tokens || tokens.length == 0) {
            const response = {
                status: 404,
                msg: "Token not found.",
            };
            res.send(response);
            return;
        }
        const response = {
            status: 200,
            msg: "Token found.",
            data: tokens,
        };
        res.send(response);
    });
}
exports.default = findTokenController;
