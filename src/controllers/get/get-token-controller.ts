import { Request, Response } from "express"
import { BayviewResponse } from "../../interfaces/response"
import tokensModel from "../../db/schemas/tokens"

export default async function getTokenController(req: Request, res: Response) {
    const { tokenAddress } = req.params

    if (!tokenAddress) {
        const response: BayviewResponse = {
            status: 400,
            msg: "Invalid token."
        }

        res.send(response)
        return
    }

    const token = await tokensModel.findOne({ address: tokenAddress })

    if (!token) {
        const response: BayviewResponse = {
            status: 404,
            msg: "Token not found."
        }

        res.send(response)
        return
    }

    const response: BayviewResponse = {
        status: 200,
        msg: "Token found.",
        data: token
    }

    res.send(response)
}