/*
 * @Author: Mike mic.roche@gmail.com
 * @Date: 2023-05-08 14:22:45
 * @LastEditors: Mike mic.roche@gmail.com
 * @LastEditTime: 2025-02-20 12:07:11
 * @FilePath: /se-substantiv-api/models/Noun.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const mongoose = require("mongoose");

const nounSchema = new mongoose.Schema({
  article: { type: String, required: true },
  singular: { type: String, required: true },
  plural: { type: String, required: true },
  category: { type: String, required: true },
  translationFr: { type: String, required: true },
  translationEn: { type: String, required: true },
});

const Noun = mongoose.model("Noun", nounSchema);

module.exports = Noun;
