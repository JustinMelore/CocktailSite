/**
 * Handles routing any drink-related API requests
 */
const express = require("express");
const data = require("./data");

const drinkRoutes = express.Router();

drinkRoutes.route("/api/drinks").get(async (req, res) => {
    //TODO Add query string logic for filtering
    allDrinks = await data.getDatabase().collection("drinks").find().toArray();
    console.log(allDrinks);
    res.json(allDrinks);
});



module.exports = drinkRoutes;