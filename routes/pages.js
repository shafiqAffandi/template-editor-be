const express = require("express");
const fs = require("fs");
const { loadPageByName } = require("../business-logic/load-page");
const { savePage } = require("../business-logic/add-page");
const { getAllPages } = require("../business-logic/get-all-page");
const { getAllLookup } = require("../business-logic/get-all-lookup");

const router = express.Router();

// getting all pages
router.get("/GetAllPages", (req, res) => {
  const pages = getAllPages();
  res.header("Access-Control-Allow-Origin", "*");
  res.json(pages);
});

// get all Lookup
router.get("/GetAllLookup", (req, res) => {
  const pages = getAllLookup();
  res.header("Access-Control-Allow-Origin", "*");
  res.json(pages);
});

// getting one page
router.get("/:name", (req, res) => {
  const page = loadPageByName(req.params.name);
  res.header("Access-Control-Allow-Origin", "*");
  res.send(page);
});

// creating one page
router.post("/SavePage", (req, res) => {
  savePage(req.body);
  res.header("Access-Control-Allow-Origin", "*");
  res.json("Success");
});

module.exports = router;
