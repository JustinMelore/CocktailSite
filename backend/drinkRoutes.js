/**
 * Handles routing any drink-related API requests
 */
const express = require("express");
const data = require("./data");

const drinkRoutes = express.Router();

drinkRoutes.route("/api/drinks").get(async (req, res) => {
    //TODO Allow search to work over ingredients and garnish as well
    allDrinks = [];
    if(req.query.search) {
        let searchQuery = {
            "$search": {
                "index": "nameTextSearch",
                "wildcard": {
                    "query": `*${req.query.search}*`,
                    "path": "name",
                    "allowAnalyzedField": true
                }
            }
        }
        allDrinks = await data.getDatabase().collection("drinks").aggregate([searchQuery]).sort({name: 1}).toArray();
    } else
        allDrinks = await data.getDatabase().collection("drinks").find().sort({name: 1}).toArray();
    res.json(allDrinks);
});



module.exports = drinkRoutes;