// const { resolve } = require('path')

async function platformX(moduleOptions) {
  // const options = Object.assign({}, moduleOptions)
  this.addPlugin({
    src: resolve(__dirname, "plugin.js"),
    fileName: "nuxt-platform-x.js",
    options
  });
}

module.exports = platformX;
module.exports.meta = require("../package.json");
