"use strict";

const assert = require("./assert.js");
const CommandLine = require("./commandLine");

describe("CommandLine", function() {

  //Focus integration test - talks with outside world
	it("provides command line argument", function() {
    const oldArgv = process.argv;
    try {
      process.argv["node", "filename.js", "my_arg"];

      const cli = CommandLine.create();
      assert.equal(cli.arg(), "my_arg");
    }
    finally {
      process.argv = oldArgv;
    }

	});

});