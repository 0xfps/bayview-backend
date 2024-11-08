import { Request, Response } from "express";
import { BayviewResponse } from "../../interfaces/response";
import commentsModel from "../../db/schemas/comments";

export default async function getTokenCommentsController(req: Request, res: Response) {
    const { tokenAddress, offset, size } = req.body

    if (!tokenAddress) {
        const response: BayviewResponse = {
            status: 400,
            msg: "Not found",
            data: {
                count: 0
            }
        }

        res.send(response)
    }

    const tokensComment = await commentsModel.find({ tokenAddress }).skip(offset).limit(size)
    const response: BayviewResponse = {
        status: 200,
        msg: "Comments found.",
        data: {
            count: tokensComment || []
        }
    }

    res.send(response)
}