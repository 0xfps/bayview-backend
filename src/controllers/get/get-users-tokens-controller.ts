import { Request, Response } from "express";
import { BayviewResponse } from "../../interfaces/response";
import tokensModel from "../../db/schemas/tokens";

export default async function getUsersTokensController(req: Request, res: Response) {
    const { address, offset, size } = req.body

    if (!address) {
        const response: BayviewResponse = {
            status: 400,
            msg: "Not found",
            data: []
        }

        res.send(response)
        return
    }

    const usersTokens = await tokensModel.find({ creator: address }).skip(offset).limit(size)
    const response: BayviewResponse = {
        status: 200,
        msg: "Tokens found.",
        data: usersTokens || []
    }

    res.send(response)
}