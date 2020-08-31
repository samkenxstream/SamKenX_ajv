"use strict"

var isBrowser = typeof window == "object"
var fullTest = isBrowser || !process.env.AJV_FAST_TEST

var options = fullTest
  ? {
      allErrors: true,
      verbose: true,
      extendRefs: "ignore",
      inlineRefs: false,
      jsonPointers: true,
      codegen: {es5: true},
    }
  : {allErrors: true}

if (fullTest && !isBrowser) {
  options.processCode = require("js-beautify").js_beautify
}

module.exports = options
