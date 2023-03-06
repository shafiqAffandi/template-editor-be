const fs = require("fs");

const savePage = (data) => {
  data.forEach((item) => {
    const pageName = item.id;
    const addLink = item.addLink ?? "";

    const bodyList = JSON.stringify(item.paging.pagingInput.bodyList);
    const _bodyList = bodyList.replace("${addLink}", addLink);
    item.paging.pagingInput.bodyList = JSON.parse(_bodyList);
    // TODO: change lookupFrom to real data

    const dirPath = "pages";
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath);
    }
    const dataPath = `./${dirPath}/${pageName}.json`;
    fs.writeFileSync(dataPath, JSON.stringify(item), "utf-8");
  });
};

module.exports = { savePage };
