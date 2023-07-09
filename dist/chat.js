"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const socket_io_1 = require("socket.io");
const http_1 = require("http");
const services_1 = require("./services");
const server = (0, http_1.createServer)(app_1.default);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: 'http://localhost:5173',
        methods: '*',
    },
});
io.on('connection', socket => {
    console.log(`⚡: ${socket.id} user just connected!`);
    socket.on('message', async ({ message, senderId, matchId }) => {
        const newMessage = await (0, services_1.addMessageService)({
            message,
            senderId,
            matchId,
        });
        io.emit('messageResponse', newMessage);
    });
    socket.on('delete', async ({ id }) => {
        const response = await (0, services_1.deleteMessageService)(id.toString());
        const { deletedMessage } = response.data;
        io.emit('messageDeleted', deletedMessage);
    });
    socket.on('disconnect', () => {
        console.log('🔥: A user disconnected');
    });
});
exports.default = server;
