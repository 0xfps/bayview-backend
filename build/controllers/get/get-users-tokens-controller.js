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
function getUsersTokensController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { address, offset, size } = req.body;
        if (!address) {
            const response = {
                status: 400,
                msg: "Not found",
                data: []
            };
            res.send(response);
        }
        const usersTokens = yield tokens_1.default.find({ creator: address }).skip(offset).limit(size);
        const response = {
            status: 200,
            msg: "Tokens found.",
            data: usersTokens || []
        };
        res.send(response);
    });
}
exports.default = getUsersTokensController;
