const express = require("express");
const drinkRoutes = require("./drinkRoutes");
const data = require("./data");

const port = process.env.PORT || 3000;
const app = express();
app.use(drinkRoutes);
app.use(express.static("../frontend/dist"));
app.use("/drinks", express.static("../frontend/dist"));

function corsConfig(req, res, next) {
    if(process.env.DEV_CORS_ORIGIN) {
        res.set("Access-Control-Allow-Origin", process.env.DEV_CORS_ORIGIN);
        console.log(`Allow origin: ${res.get("Access-Control-Allow-Origin")}`);
    }
    next();
}

app.use(corsConfig);

app.listen(port, () => {
    data.connectToDatabase();
    console.log(`Server is now listening on port ${port}`);
})