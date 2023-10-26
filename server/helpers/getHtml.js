const path = require("path");
const fs = require("fs");

const getHtml = (htmlFileName) => {
  const filePath = path.join("./public", htmlFileName);
  return fs.readFileSync(filePath, "utf-8");
};

module.exports = getHtml;
