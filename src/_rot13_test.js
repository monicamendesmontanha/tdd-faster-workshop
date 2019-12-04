"use strict";

const assert = require("./assert");
const rot13 = require("./rot13");


// STRATEGY
// - empty string
// - non alphabetos
// - single a -> m
// - more characteres

describe("ROT_13", function() {

  it("does nothing with empty string", function() {
    const output = rot13.transform("");
    assert.equal(output, "");
  });


  it("does not transform non-letters", function() {
    const output = rot13.transform("123 $%@");
    assert.equal(output, "123 $%@");
  });

  it("rotates letters by 13", function() {
    const output = rot13.transform("hello");
    assert.equal(output, "uryyb");
  });
});