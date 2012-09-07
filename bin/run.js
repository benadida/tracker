#!/usr/bin/env node
/*
 * Trackr.io
 */

var express = require("express");
var clientSessions = require("client-sessions");
var path = require("path");

var app = express.createServer();

// sessions
app.use(clientSessions({
  cookieName: 'trackr_state',
  secret: 'AWESOME',
}));

app.use(express.static(path.join(__dirname, "..", "static")));

app.listen(3000);