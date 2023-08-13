"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editMessage = exports.deleteMessage = exports.getAllMatchMessages = exports.getMessageById = exports.addMessage = void 0;
const services_1 = require("../services");
const addMessage = async (req, res) => {
    const { message, senderId, matchId } = req.body;
    const data = await (0, services_1.addMessageService)({
        message,
        senderId,
        matchId,
    });
    res.status(data?.status).json(data);
};
exports.addMessage = addMessage;
const getMessageById = async (req, res) => {
    const { id } = req.params;
    const data = await (0, services_1.getMessageByIdService)(+id);
    res.status(data?.status).json(data);
};
exports.getMessageById = getMessageById;
const getAllMatchMessages = async (req, res) => {
    const { id } = req.params;
    const data = await (0, services_1.getAllMessagesService)(+id, req);
    res.status(data.status).json(data);
};
exports.getAllMatchMessages = getAllMatchMessages;
const deleteMessage = async (req, res) => {
    const { id } = req.params;
    const data = await (0, services_1.deleteMessageService)(id);
    res.status(data?.status).json(data);
};
exports.deleteMessage = deleteMessage;
const editMessage = async (req, res) => {
    const { id, newMessage } = req.body;
    const data = await (0, services_1.editMessageService)(id, newMessage);
    res.status(data?.status).json(data);
};
exports.editMessage = editMessage;
