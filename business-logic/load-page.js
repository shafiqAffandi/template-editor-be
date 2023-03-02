const fs = require("fs");

const dirPath = "pages";

const loadPageByName = (pageName) => {
  console.log(pageName);
  const fileBuffer = fs.readFileSync(`${dirPath}/${pageName}.json`, "utf-8");
  const page = JSON.parse(fileBuffer);
  return page;
};

module.exports = { loadPageByName };
