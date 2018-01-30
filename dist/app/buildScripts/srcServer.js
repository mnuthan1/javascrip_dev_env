"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * srcServer.js will server the files in our src directory
 * this act as DEV server
 */
var express = require("express");
var path = require("path");
var open = require("open");
var port = 3000;
var __dirname = path.resolve('');
path.resolve();
var app = express();
// Root path
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/app/index.html'));
});
/**
 * Error logging
 */
app.listen(port, function (err) {
    if (err) {
        console.log(err);
    }
    else {
        open('http://localhost:' + port);
    }
});
//# sourceMappingURL=srcServer.js.map