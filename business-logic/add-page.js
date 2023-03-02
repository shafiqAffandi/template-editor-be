const fs = require("fs");

const savePage = (pageName, data) => {
  const dirPath = "pages";
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }

  const dataPath = `./${dirPath}/${pageName}.json`;
  fs.writeFileSync(dataPath, JSON.stringify(data), "utf-8");
};

module.exports = { savePage };
