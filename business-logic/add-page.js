const fs = require("fs");

const saveMenu = (menuData, pages) => {
  const menu = {
    menuName: menuData.menuName,
    pages: pages,
  };

  const dirPath = "menu";
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }
  const dataPath = `./${dirPath}/${menuData.menuId}.json`;
  fs.writeFileSync(dataPath, JSON.stringify(menu), "utf-8");
};

const savePage = ({ menuData, pageData }) => {
  const pages = [];

  pageData.forEach((item) => {
    const pageName = item.id;
    pages.push(pageName);

    const addLink = item.addLink ?? "";

    if (item.paging) {
      const bodyList = JSON.stringify(item.paging.pagingInput.bodyList);
      const _bodyList = bodyList.replace("${addLink}", addLink);
      item.paging.pagingInput.bodyList = JSON.parse(_bodyList);
    }
    // TODO: change lookupFrom to real data

    const dirPath = "pages";
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath);
    }
    const dataPath = `./${dirPath}/${pageName}.json`;
    fs.writeFileSync(dataPath, JSON.stringify(item), "utf-8");
  });

  saveMenu(menuData, pages);
};

module.exports = { savePage };
