const fs = require("fs");
const path = require("path");

const dirPath = "pages";

const getAllPages = () => {
  const pages = fs.readdirSync(`${dirPath}/`, (err, files) => {
    return files
      .filter((item) => {
        return path.extname(item).toLowerCase() === ".json";
      })
      .map((item) => {
        return path.parse(item).name;
      });
  });
  return pages;
};

module.exports = { getAllPages };
