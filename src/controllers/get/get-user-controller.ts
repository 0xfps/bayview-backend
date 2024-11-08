import { Request, Response } from "express"
import { BayviewResponse } from "../../interfaces/response"
import usersModel from "../../db/schemas/users"

export default async function getUserController(req: Request, res: Response) {
    const { address } = req.params

    if (!address) {
        const response: BayviewResponse = {
            status: 400,
            msg: "Invalid user.",
            data: undefined
        }

        res.send(response)
    }

    const user = await usersModel.findOne({ address })

    if (!user) {
        const { created, userAddress, username, dateJoined } = await createNewUser(address)
        if (created) {
            const response: BayviewResponse = {
                status: 201,
                msg: "User created.",
                data: {
                    address: userAddress,
                    username,
                    dateJoined
                }
            }

            res.send(response)
        } else {
            const response: BayviewResponse = {
                status: 400,
                msg: "Error creating user.",
                data: undefined
            }

            res.send(response)
        }
    } else {
        const { address, username, dateJoined } = user
        const response: BayviewResponse = {
            status: 200,
            msg: "User found.",
            data: {
                address,
                username,
                dateJoined
            }
        }

        res.send(response)
    }
}

interface NewUser {
    created: boolean,
    userAddress?: string,
    username?: string,
    dateJoined?: number
}

async function createNewUser(address: string): Promise<NewUser> {
    const dateJoined = new Date().getTime()
    const username = shrinkUsername(address)

    const newuser = await usersModel.create({
        address,
        username,
        dateJoined
    })

    if (!newuser) {
        return {
            created: false
        }
    } else {
        return {
            created: true,
            userAddress: address,
            username,
            dateJoined
        }
    }
}

function shrinkUsername(address: string): string {
    const firstFour = address.slice(0, 6)
    const lastFour = address.slice(-4)
    return `${firstFour}${lastFour}`
}