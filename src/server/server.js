"use strict";

import express from "express";
import path from "path";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join("./", "dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join("./", "dist", "index.html"));
});

app.listen(PORT, () => {
    console.log("server listening on PORT " + String(PORT));
});