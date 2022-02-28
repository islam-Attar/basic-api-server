"use strict";

const express = require("express");
const { Food } = require("../models/index.js");
const router = express.Router();

// Routes
router.get("/food", getFood);
router.get("/food/:id", getFoodById);
router.put("/food/:id", updateFood);
router.post("/food", addFood);
router.delete("/food/:id", deleteFood);


async function getFood(req, res) {
  let food = await Food.findAll();
  res.status(200).json(food);
}

async function getFoodById(req, res) {
  let addedId = parseInt(req.params.id);
  let foodAskedFor = await Food.findOne({ where: { id: addedId } });
  res.status(200).json(foodAskedFor);
}

async function addFood(req, res) {
  let newFood = req.body;
  let addedFood = await Food.create(newFood);
  res.status(201).json(addedFood);
}


async function updateFood(req, res) {
  let body = req.body;
  let id = req.params.id;
  let updateFood = await Food.findOne({ where: { id: id } });
  const UpdatedFood = await updateFood.update(body);
  res.status(201).json(UpdatedFood);
}


async function deleteFood(req, res) {
  let deletedId = parseInt(req.params.id);
  let deletedFood = await Food.destroy({ where: { id: deletedId } });
  res.status(204).json(deletedFood);
}


module.exports = router;