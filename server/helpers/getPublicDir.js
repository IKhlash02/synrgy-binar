const path = require("path");

const getPublicDir = (url) => path.join(__dirname, "./../../public", url);

module.exports = getPublicDir;
