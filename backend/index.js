const express = require("express");
const drinkRoutes = require("./drinkRoutes");
const imageRoutes = require("./imageRoutes");
const data = require("./data");

const port = process.env.PORT || 3000;
const app = express();

/**
 * Custom middleware for handling CORS errors during testing
 * @param {*} req - The request being sent in
 * @param {*} res - The response to send
 * @param {*} next - The next middleware/function to run
 */
const corsConfig = function(req, res, next) {
    if(process.env.DEV_CORS_ORIGIN) {
        res.set("Access-Control-Allow-Origin", process.env.DEV_CORS_ORIGIN);
        // console.log(`Allow origin: ${res.get("Access-Control-Allow-Origin")}`);
    }
    next();
}

app.use(corsConfig);
app.use(drinkRoutes);
app.use(imageRoutes);
app.use(express.static("../frontend/dist"));
app.use("/drinks", express.static("../frontend/dist"));
app.use("/drinks/:drinkName", express.static("../frontend/dist"));

app.listen(port, () => {
    data.connectToDatabase();
    console.log(`Server is now listening on port ${port}`);
})