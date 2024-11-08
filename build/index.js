"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
require("./db/index");
const get_user_route_1 = __importDefault(require("./routes/get/get-user-route"));
const get_token_route_1 = __importDefault(require("./routes/get/get-token-route"));
const get_token_comments_route_1 = __importDefault(require("./routes/get/get-token-comments-route"));
const get_token_comments_count_route_1 = __importDefault(require("./routes/get/get-token-comments-count-route"));
const get_all_tokens_route_1 = __importDefault(require("./routes/get/get-all-tokens-route"));
const get_users_tokens_route_1 = __importDefault(require("./routes/get/get-users-tokens-route"));
const add_comment_route_1 = __importDefault(require("./routes/post/add-comment-route"));
const create_token_route_1 = __importDefault(require("./routes/post/create-token-route"));
dotenv_1.default.config();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 8000;
const app = (0, express_1.default)();
// @todo Configure cors at the end of the project.
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
// GET Routes.
app.use("/get-user", get_user_route_1.default);
app.use("/get-token", get_token_route_1.default);
app.use("/get-token-comments", get_token_comments_route_1.default);
app.use("/get-token-comments-count", get_token_comments_count_route_1.default);
app.use("/get-all-tokens", get_all_tokens_route_1.default);
app.use("/get-users-tokens", get_users_tokens_route_1.default);
// POST Routes.
app.use("/add-comment", add_comment_route_1.default);
app.use("/create-token", create_token_route_1.default);
app.get("/", function (req, res) {
    res.send({
        status: 200,
        msg: "OK",
        data: ["Hola, amigo!"]
    });
});
app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}.`);
});
