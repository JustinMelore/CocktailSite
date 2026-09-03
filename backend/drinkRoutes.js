/**
 * Handles routing any drink-related API requests
 */
const express = require("express");
const data = require("./data");

const drinkRoutes = express.Router();

drinkRoutes.route("/api/drinks").get(async (req, res) => {
    //TODO Add query string logic for filtering
    //TODO Replace with actual database querying
    res.json(data);
});



module.exports = drinkRoutes;