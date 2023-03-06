require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let corsOptions = {
  origin: ["http://localhost:3000"],
};

app.use(cors(corsOptions));

const pagesRouter = require("./routes/pages");
app.use("/pages", pagesRouter);

app.listen(3535, () => console.log("server started"));
