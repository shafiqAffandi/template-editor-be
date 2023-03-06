const fs = require("fs");
const path = require("path");

const dirPath = "lookup";

const getAllLookup = () => {
  const pages = fs.readdirSync(`${dirPath}/`, (err, files) => {
    return files.filter((item) => {
      return path.extname(item).toLowerCase() === ".json";
    });
  });

  const parsedPages = pages.map((item) => {
    return path.parse(item).name;
  });
  return parsedPages;
};

module.exports = { getAllLookup };
