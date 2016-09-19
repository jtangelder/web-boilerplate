function returnObjectKeyAsValue (module) {
  module.exports = new Proxy({}, {
    get(target, prop) {
      if (prop === '__esModule') {
        return false;
      }
      return prop;
    },
    has() {
      return true;
    }
  });
}

require.extensions['.css'] = returnObjectKeyAsValue;
require.extensions['.scss'] = returnObjectKeyAsValue;