"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const commentsSchema = new mongoose_1.Schema({
    commentId: mongoose_1.SchemaTypes.String,
    tokenAddress: mongoose_1.SchemaTypes.String,
    address: mongoose_1.SchemaTypes.String,
    comment: mongoose_1.SchemaTypes.String,
    date: mongoose_1.SchemaTypes.Date
});
const commentsModel = mongoose_1.models.commentsModel || (0, mongoose_1.model)("commentsModel", commentsSchema);
exports.default = commentsModel;
