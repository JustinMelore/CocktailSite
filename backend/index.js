const express = require("express");
const drinkRoutes = require("./drinkRoutes");
const data = require("./data");

const port = process.env.PORT || 3000;
const app = express();
app.use(drinkRoutes);
app.use(express.static("../frontend/dist"));

app.listen(port, () => {
    data.connectToDatabase();
    console.log(`Server is now listening on port ${port}`);
})