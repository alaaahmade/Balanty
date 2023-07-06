"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playerAvatar = exports.getPlayers = exports.playerMatches = exports.updatePlayer = exports.getPlayer = void 0;
const player_1 = require("../services/player");
const getPlayer = async (req, res) => {
    const { id } = req.params;
    const response = (await (0, player_1.getPlayerService)(+id));
    res.status(response?.status).json(response);
};
exports.getPlayer = getPlayer;
const updatePlayer = async (req, res) => {
    const response = (await (0, player_1.updatePlayerService)(req));
    res.status(response?.status).json(response);
};
exports.updatePlayer = updatePlayer;
const playerMatches = async (req, res) => {
    const { id } = req.params;
    const response = (await (0, player_1.playerMatchesService)(+id));
    res.status(response?.status).json(response);
};
exports.playerMatches = playerMatches;
const playerAvatar = async (req, res) => {
    const { id } = req.params;
    const response = (await (0, player_1.playerAvatarService)(+id));
    res.status(response.status).json(response);
};
exports.playerAvatar = playerAvatar;
const getPlayers = async (req, res) => {
    const response = (await (0, player_1.getPlayersService)(req));
    res.status(response.status).json(response);
};
exports.getPlayers = getPlayers;
