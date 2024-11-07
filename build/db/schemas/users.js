"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const usersSchema = new mongoose_1.Schema({
    address: mongoose_1.SchemaTypes.String, // Address is used as user ID.
    username: mongoose_1.SchemaTypes.String,
    dateJoined: mongoose_1.SchemaTypes.Date
});
const usersModel = mongoose_1.models.usersModel || (0, mongoose_1.model)("usersModel", usersSchema);
exports.default = usersModel;
