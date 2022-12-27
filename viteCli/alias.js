const { resolve } = require("path");
const { entryPath } = require('./commander');

module.exports = {
  UTIL: resolve(__dirname, "../assets/utils"),
  '@':resolve(__dirname, `../${entryPath}`),
};
