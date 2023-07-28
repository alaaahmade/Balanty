"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serverError = (err, req, res, next) => {
    if (err.status) {
        return res.status(err.status).json({
            error: true,
            data: {
                status: err.status,
                message: err.message,
            },
        });
    }
    res.status(500).json({ error: true, data: { message: err.message } });
};
exports.default = serverError;
