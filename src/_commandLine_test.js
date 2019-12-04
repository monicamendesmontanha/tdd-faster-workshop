"use strict";

const assert = require("./assert.js");
const CommandLine = require("./commandLine");

describe("CommandLine", function() {

  //Focus integration test - talks with outside world
	it("provides command-line argument", function() {
    preserveArgv(() => {

      process.argv = ["node", "filename.js", "my_arg"];
      const cli = CommandLine.create();
      assert.equal(cli.arg(), "my_arg");
    });
	});

});

function preserveArgv(fn) {
  const oldArgv = process.argv;
  try {
    fn();
  }
  finally {
    process.argv = oldArgv;
  }
}