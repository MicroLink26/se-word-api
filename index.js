/*
 * @Author: Mike mic.roche@gmail.com
 * @Date: 2023-08-08 20:46:17
 * @LastEditors: Mike mic.roche@gmail.com
 * @LastEditTime: 2025-02-20 12:06:10
 * @FilePath: /se-substantiv-api/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

// Routes
const nounRoutes = require("./routes/nouns");
app.use("/api/nouns", nounRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
