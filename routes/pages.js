const express = require("express");
const fs = require("fs");
const { loadPageByName } = require("../business-logic/load-page");
const { savePage } = require("../business-logic/add-page");
const { getAllPages } = require("../business-logic/get-all-page");

const router = express.Router();

// getting all pages
router.get("/GetAllPages", (req, res) => {
  const pages = getAllPages();
  res.json(pages);
});

// getting one page
router.get("/:name", (req, res) => {
  const page = loadPageByName(req.params.name);
  res.send(page);
});

// creating one page
router.post("/SavePage", (req, res) => {
  savePage(req.body.name, req.body.data);
  res.send("Success");
});

module.exports = router;
