"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * srcServer.js will server the files in our src directory
 * this act as DEV server
 */
const express = require("express");
const path = require("path");
path.resolve();
var app = express();
app.set("port", process.env.PORT || 3000);
// Root path
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/app/index.html'));
});
/**
 * Error logging
 */
const server = app.listen(app.get("port"), () => {
    console.log(("  App is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"));
    console.log("  Press CTRL-C to stop\n");
});
//# sourceMappingURL=server.js.map