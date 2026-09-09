/**
 * Handles routing any drink-related API requests
 */
const express = require("express");
const data = require("./data");

const drinkRoutes = express.Router();

drinkRoutes.route("/api/drinks").get(async (req, res) => {
    //TODO Add query string logic for filtering
    console.log(`Allow origin in route: ${res.get("Access-Control-Allow-Origin")}`);
    allDrinks = await data.getDatabase().collection("drinks").find().sort({name: 1}).toArray();
    res.json(allDrinks);
});



module.exports = drinkRoutes;