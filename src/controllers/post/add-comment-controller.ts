import { Request, Response } from "express";
import commentsModel from "../../db/schemas/comments";
import { BayviewResponse } from "../../interfaces/response";

export default async function addCommentController(req: Request, res: Response) {
    const { address, tokenAddress, comment } = req.body
    
    if (!address) {
        const response: BayviewResponse = {
            status: 400,
            msg: "Invalid address"
        }

        res.send(response)
        return
    }

    const date = new Date().getTime()
    const commentId = date * Math.floor(Math.random() * 1_000)

    const newComment = await commentsModel.create({
        commentId,
        tokenAddress,
        address,
        comment,
        date
    })

    if (!newComment) {
        const response: BayviewResponse = {
            status: 403,
            msg: "There was an error adding the comment."
        }

        res.send(response)
        return
    }


    const response: BayviewResponse = {
        status: 200,
        msg: "Comment added!"
    }

    res.send(response)
}