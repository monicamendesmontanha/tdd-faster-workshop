"use strict";

const rot13 = require("./rot13");
const CommandLine = require("./commandLine");

module.exports = class App {

  constructor(cli = CommandLine.create()) {
    this._cli = cli;
  }

  run() {
		const input = this._cli.arg();
		const output = rot13.transform(input);
		this._cli.output(output);
  }
};