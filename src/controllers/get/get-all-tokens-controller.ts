import { Request, Response } from "express";
import tokensModel from "../../db/schemas/tokens";
import { BayviewResponse } from "../../interfaces/response";

export default async function getAllTokensController(req: Request, res: Response) {
    const allTokens = await tokensModel.find({}).limit(100)
    const response: BayviewResponse = {
        status: 200,
        msg: "OK",
        data: allTokens
    }

    res.send(response)
}