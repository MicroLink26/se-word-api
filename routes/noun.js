/*
 * @Author: Mike mic.roche@gmail.com
 * @Date: 2023-05-27 11:14:40
 * @LastEditors: Mike mic.roche@gmail.com
 * @LastEditTime: 2025-02-20 12:08:02
 * @FilePath: /se-substantiv-api/routes/noun.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require("express");
const router = express.Router();
const Noun = require("../models/Noun");

// Get all nouns
router.get("/", async (req, res) => {
  try {
    const nouns = await Noun.find();
    res.json(nouns);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one noun by ID
router.get("/:id", getNoun, (req, res) => {
  res.json(res.noun);
});

// Create a new noun
router.post("/", async (req, res) => {
  const noun = new Noun(req.body);
  try {
    const newNoun = await noun.save();
    res.status(201).json(newNoun);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a noun
router.patch("/:id", getNoun, async (req, res) => {
  Object.assign(res.noun, req.body);
  try {
    const updatedNoun = await res.noun.save();
    res.json(updatedNoun);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a noun
router.delete("/:id", getNoun, async (req, res) => {
  try {
    await res.noun.remove();
    res.json({ message: "Deleted Noun" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get a noun by ID
async function getNoun(req, res, next) {
  let noun;
  try {
    noun = await Noun.findById(req.params.id);
    if (noun == null) {
      return res.status(404).json({ message: "Cannot find noun" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.noun = noun;
  next();
}

module.exports = router;
