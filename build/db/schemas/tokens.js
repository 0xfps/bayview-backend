"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const tokenSchema = new mongoose_1.Schema({
    tokenAddress: mongoose_1.SchemaTypes.String,
    name: mongoose_1.SchemaTypes.String,
    description: mongoose_1.SchemaTypes.String,
    image: mongoose_1.SchemaTypes.String, // URL to Cloudinary, I presume.
    chain: mongoose_1.SchemaTypes.String,
    twitter: mongoose_1.SchemaTypes.String,
    telegram: mongoose_1.SchemaTypes.String
});
const tokensModel = mongoose_1.models.tokensModel || (0, mongoose_1.model)("tokensModel", tokenSchema);
exports.default = tokensModel;
