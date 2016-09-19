// babelify all the JS files
require("babel-register");

// return the requested property of an CSS import as it's value
function returnKeyAsValue (module) {
  module.exports = new Proxy({}, {
    get(target, prop) { return (prop === '__esModule') ? false : prop; },
    has() {  return true; }
  });
}

require.extensions['.css'] = returnKeyAsValue;
require.extensions['.scss'] = returnKeyAsValue;

// inject chai.expect into all tests
global.expect = require('chai').expect;

// global jsdom function to mock the browser
const createDocument = require('jsdom').jsdom;
global.jsdom = function () {
  global.document = createDocument('<!doctype html><html><body></body></html>');
  global.window = global.document.defaultView;
};
