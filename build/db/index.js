"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const DB_URL = process.env.LOCAL == "true" ? process.env.MONGO_DB_LOCAL : process.env.MONGO_DB_LIVE;
function connectToDatabase() {
    if (DB_URL) {
        mongoose_1.default.connect(DB_URL)
            .then(function () {
            console.log("Connected to DB.");
        })
            .catch(function () {
            throw new Error("Could not connect to DB.");
        });
    }
    else {
        throw new Error("There is no set DB URL.");
    }
}
connectToDatabase();
