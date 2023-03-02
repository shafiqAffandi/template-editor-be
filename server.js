require("dotenv").config();

const express = require("express");
const app = express();
app.use(express.json());

const pagesRouter = require("./routes/pages");
app.use("/pages", pagesRouter);

app.listen(3535, () => console.log("server started"));
