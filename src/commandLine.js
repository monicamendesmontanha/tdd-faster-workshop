"use strict";

module.exports = class CommandLine {

  static create() {
    return new CommandLine();
  }

  arg() {
    return "my_arg";
  }
};