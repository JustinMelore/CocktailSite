const data = require("./data");
const express = require("express");
const port = process.env.PORT || 3000;
const app = express();

//TODO Replace with proper routes
app.get("/{*splat}", async (req, res) => {
    res.json(data);
})

app.listen(port, () => {
    console.log(`Server is now listening on port ${port}`);
})