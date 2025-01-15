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
const multer_1 = __importDefault(require("multer"));
const streamifier_1 = __importDefault(require("streamifier"));
const dotenv_1 = __importDefault(require("dotenv"));
const cloudinary_1 = require("cloudinary");
const tokens_1 = __importDefault(require("../../db/schemas/tokens"));
dotenv_1.default.config();
const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_CLOUD_API_KEY, CLOUDINARY_CLOUD_API_SECRET } = process.env;
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({ storage });
const uploadMiddleware = upload.single("file");
cloudinary_1.v2.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_CLOUD_API_KEY,
    api_secret: CLOUDINARY_CLOUD_API_SECRET,
    secure: true,
});
function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
}
function createTokenController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield runMiddleware(req, res, uploadMiddleware);
        const { file } = req;
        if (file) {
            const stream = cloudinary_1.v2.uploader.upload_stream({ folder: "Bayview" }, (error) => {
                if (error) {
                    console.error(error);
                    const response = {
                        status: 400,
                        msg: "Error uploading image.",
                    };
                    res.send(response);
                }
                else {
                    streamifier_1.default.createReadStream(file.buffer).pipe(stream);
                    createNewToken(req).then(function (tokenData) {
                        if (tokenData) {
                            const response = {
                                status: 201,
                                msg: "Token created.",
                                data: tokenData
                            };
                            res.send(response);
                        }
                        else {
                            const response = {
                                status: 400,
                                msg: "Error creating token.",
                            };
                            res.send(response);
                        }
                    });
                }
            });
        }
    });
}
exports.default = createTokenController;
function createNewToken(req) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, ticker, description, image, address, chain, twitter, telegram, creator } = req.body;
        const newTokenCreated = yield tokens_1.default.create({
            tokenAddress: address,
            name,
            ticker,
            description,
            image,
            chain,
            twitter,
            telegram,
            creator
        });
        return newTokenCreated || undefined;
    });
}
