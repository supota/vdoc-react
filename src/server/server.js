"use strict";

import express from "express";
import path from "path";
import bodyParser from "body-parser";

const PORT = process.env.PORT || 3000;

const app = express();

const playersJson = require("./players.json");

app.use(express.static(path.join("/", "dist")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/v1/players/:id", (req, res) => {
    const player = playersJson.players.find((player) => {
        return player.id == req.params.id;
    });
    res.json({
        player: player
    });
});

app.get("/api/v1/players", (req, res) => {
    const players = playersJson.players;
    res.json({
        players: players
    });
});

app.post("/api/v2/players", (req, res) => {
    res.json({
        code: 202
    });
});

app.get("*", (req, res) => {
    res.sendFile(path.join("./", "dist", "index.html"));
});

app.listen(PORT, () => {
    console.log("server listening on PORT " + String(PORT));
});