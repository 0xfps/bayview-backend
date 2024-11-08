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
const users_1 = __importDefault(require("../../db/schemas/users"));
function getUserController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { address } = req.params;
        if (!address) {
            const response = {
                status: 400,
                msg: "Invalid user.",
                data: undefined
            };
            res.send(response);
        }
        const user = yield users_1.default.findOne({ address });
        if (!user) {
            const { created, userAddress, username, dateJoined } = yield createNewUser(address);
            if (created) {
                const response = {
                    status: 201,
                    msg: "User created.",
                    data: {
                        address: userAddress,
                        username,
                        dateJoined
                    }
                };
                res.send(response);
            }
            else {
                const response = {
                    status: 400,
                    msg: "Error creating user.",
                    data: undefined
                };
                res.send(response);
            }
        }
        else {
            const { address, username, dateJoined } = user;
            const response = {
                status: 200,
                msg: "User found.",
                data: {
                    address,
                    username,
                    dateJoined
                }
            };
            res.send(response);
        }
    });
}
exports.default = getUserController;
function createNewUser(address) {
    return __awaiter(this, void 0, void 0, function* () {
        const dateJoined = new Date().getTime();
        const username = shrinkUsername(address);
        const newuser = yield users_1.default.create({
            address,
            username,
            dateJoined
        });
        if (!newuser) {
            return {
                created: false
            };
        }
        else {
            return {
                created: true,
                userAddress: address,
                username,
                dateJoined
            };
        }
    });
}
function shrinkUsername(address) {
    const firstFour = address.slice(0, 6);
    const lastFour = address.slice(-4);
    return `${firstFour}${lastFour}`;
}
