import { Request, Response } from "express";
import { BayviewResponse } from "../../interfaces/response";
import tokensModel from "../../db/schemas/tokens";

export default async function findTokenController(req: Request, res: Response) {
  const { tokenSearchString } = req.params;

  if (!tokenSearchString) {
    const response: BayviewResponse = {
      status: 400,
      msg: "Invalid token or chain.",
    };

    res.send(response);
    return;
  }

  const tokens = await tokensModel
    .find({
      $or: [
        { name: { $regex: tokenSearchString, $options: "i" } },
        { ticker: { $regex: tokenSearchString, $options: "i" } },
      ],
    })
    .limit(20);

  if (!tokens || tokens.length == 0) {
    const response: BayviewResponse = {
      status: 404,
      msg: "Token not found.",
    };

    res.send(response);
    return;
  }

  const response: BayviewResponse = {
    status: 200,
    msg: "Token found.",
    data: tokens,
  };

  res.send(response);
}
