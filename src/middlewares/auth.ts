import { NextFunction, Request, Response } from "express";
import { response } from "../common/responses";
import { StatusCodes } from "http-status-codes";
import messages from "../utils/messages";
import jwt from 'jsonwebtoken'
import ENV from "../config/server-config";


export async function authenticateUser(req:Request, res:Response, next:NextFunction) {
    try {
        // recieve token
        const token = req.headers['token']?.toString()!

        if(!token){
            return response({res, statusCode:StatusCodes.NO_CONTENT, success:false, message:messages.TOKEN_NOT_FOUND})
        }

        // now verify token
        const decodeToken = jwt.verify(token, ENV.JWT_SECRET_KEY)
        req.user = decodeToken;
        
        next()
        // response({res, statusCode:StatusCodes.OK, success:true, message:messages.AUTH_SUCCESS})
    } catch (error) {
        response({res, statusCode:StatusCodes.CONFLICT, success:false, message:messages.AUTH_FAILED, error:{error}})
    }
}