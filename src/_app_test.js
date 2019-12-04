// Copyright Titanium I.T. LLC.
"use strict";

const assert = require("./assert.js");
const App = require("./app.js");

// Mocha
describe("Application", function() {

	it("encodes input RPT-13", function() {
    const app = new App();
    const output = app.run("hello");
    assert.equal(output, "uryyb");
	});

});