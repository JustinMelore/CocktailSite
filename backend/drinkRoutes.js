/**
 * Handles routing any drink-related API requests
 */
const express = require("express");
const data = require("./data");

const drinkRoutes = express.Router();

drinkRoutes.route("/api/drinks").get(async (req, res) => {
    let allDrinks = [];
    if(req.query.search) {
        const searchQuery = getSearchQuery(req.query.search);
        allDrinks = await data.getDatabase().collection("drinks").aggregate([searchQuery]).toArray();
    } else
        allDrinks = await data.getDatabase().collection("drinks").find().sort({name: 1}).toArray();
    res.json(allDrinks);
});

drinkRoutes.route("/api/drinks/:drinkName").get(async (req, res) => {
    const drink = await data.getDatabase().collection("drinks").findOne({name: req.params.drinkName});
    if(drink) {
        res.json(drink);
    } else {
        res.status(404).end("Could not find drink with name " + req.params.drinkName);
    }
});

/**
 * Returns the completed search query over the drinks database using a provided search term
 * @param {string} search - The search term to use with the query 
 * @returns An object representing the search query. Should be used with the aggregate() function
 */
function getSearchQuery(search) {
    const searchPaths = ["name", "garnish", "ingredients.ingredient"];
    let singleQueries = searchPaths.map((elem) => {
        return {
            wildcard: {
                query: `*${search}*`,
                path: elem,
                allowAnalyzedField: true
            }
        }
    });
    singleQueries[0].wildcard.score = {boost: { value: 2}};
    singleQueries[2] = {
        embeddedDocument: {
            path: "ingredients",
            operator: singleQueries[2]
        }
    }
    return {
        $search: {
            index: "nameTextSearch",
            compound: {
                should: singleQueries,
                minimumShouldMatch: 1
            }
        }
    };
}

module.exports = drinkRoutes;