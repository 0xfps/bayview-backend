import { Request, Response } from "express";
import multer from "multer"
import streamifier from "streamifier"
import dotenv from "dotenv"
import { v2 as cloudinary } from "cloudinary";
import { BayviewResponse } from "../../interfaces/response";
import tokensModel from "../../db/schemas/tokens";

dotenv.config()
const {
    CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_CLOUD_API_KEY,
    CLOUDINARY_CLOUD_API_SECRET
} = process.env

const storage = multer.memoryStorage();
const upload = multer({ storage });
const uploadMiddleware = upload.single("file");

cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_CLOUD_API_KEY,
    api_secret: CLOUDINARY_CLOUD_API_SECRET,
    secure: true,
});

function runMiddleware(req: any, res: any, fn: any) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result: any) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
}

export default async function createTokenController(req: Request, res: Response) {
    await runMiddleware(req, res, uploadMiddleware);
    const { file } = req

    if (file) {
        const stream = cloudinary.uploader.upload_stream({ folder: "Bayview" },
            (error,) => {
                if (error) {
                    console.error(error)
                    const response: BayviewResponse = {
                        status: 400,
                        msg: "Error uploading image.",
                    }
                    res.send(response)
                } else {
                    streamifier.createReadStream(file.buffer).pipe(stream);

                    createNewToken(req).then(function (tokenData: Object | undefined) {
                        if (tokenData) {
                            const response: BayviewResponse = {
                                status: 201,
                                msg: "Token created.",
                                data: tokenData
                            }
                            res.send(response)
                        } else {
                            const response: BayviewResponse = {
                                status: 400,
                                msg: "Error creating token.",
                            }
                            res.send(response)
                        }
                    })
                }
            }
        )

    }
}

async function createNewToken(req: Request): Promise<Object | undefined> {
    const { name, ticker, description, image, address, chain, twitter, telegram, creator } = req.body
    const newTokenCreated = await tokensModel.create({
        tokenAddress: address,
        name,
        ticker,
        description,
        image,
        chain,
        twitter,
        telegram,
        creator
    })

    return newTokenCreated || undefined
}