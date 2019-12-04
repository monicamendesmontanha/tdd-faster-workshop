"use strict";

const assert = require("./assert.js");
const CommandLine = require("./commandLine");
const stdout = require("test-console").stdout;

describe("CommandLine", function() {

  //Focus integration test - talks with outside world
	it("provides command-line argument", function() {
    preserveArgv(() => {

      process.argv = ["node", "filename.js", "my_arg"];
      const cli = CommandLine.create();
      assert.equal(cli.arg(), "my_arg");
    });
  });

  it("outputs to console", function() {
    stdout.inspectSync((output) => {
      const cli = CommandLine.create();
      cli.output("my output");
      assert.deepEqual(output, ["my output\n"]);
    });
  });

  it("argument is nullable", function() {
    const cli = CommandLine.createNull("my_arg");
    assert.equal(cli.arg(), "my_arg");
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