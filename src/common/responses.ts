import { responseTypes } from "../interfaces/types";

export function response ({res, statusCode, success, message, error={}, data={}}: responseTypes) {
    return res.status(statusCode).json({
        success,
        message,
        error,
        data
    })
}