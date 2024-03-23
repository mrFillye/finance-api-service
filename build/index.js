"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
var app = (0, express_1.default)();
var port = process.env.PORT;
app.get("/", function (req, res) {
    res.send("Welcome to my server!");
});
app.listen(port, function () {
    console.log("Server is running on port ".concat(port));
});
