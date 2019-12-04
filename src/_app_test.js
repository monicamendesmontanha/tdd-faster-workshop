// Copyright Titanium I.T. LLC.
"use strict";

const assert = require("./assert.js");
const App = require("./app.js");
const CommandLine = require("./commandLine");

// Mocha
describe("Application", function() {

	it("encodes input using ROT-13", function() {
    const cli = CommandLine.createNull("hello");
    const app = new App(cli);

    const output = app.run();
    assert.equal(output, "uryyb");
	});

});