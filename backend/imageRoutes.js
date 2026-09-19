/**
 * Handles routing for image-related requests to the API
 */
const express = require("express");
const data = require("./data");

const imageRoutes = express.Router();

imageRoutes.route("/api/images/:id").get(async (req, res) => {
    const fileResponse = await data.verifyImage(req.params.id);
    if(!fileResponse.exists)
        return res.status(404).end(`Could not find image with id ${req.params.id}`);
    res.set("Content-Type", fileResponse.contentType);
    res.set("Content-Disposition", `attachment; filename="${fileResponse.name}"`);
    const stream = await data.getImageStream(req.params.id);
    stream.pipe(res);
});

module.exports = imageRoutes;