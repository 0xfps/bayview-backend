import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const DB_URL: string | undefined = process.env.LOCAL == "true" ? process.env.MONGO_DB_LOCAL : process.env.MONGO_DB_LIVE

function connectToDatabase() {
    if (DB_URL) {
        mongoose.connect(DB_URL)
            .then(function () {
                console.log("Connected to DB.")
            })
            .catch(function () {
                throw new Error("Could not connect to DB.")
            })
    } else {
        throw new Error("There is no set DB URL.")
    }
}

connectToDatabase()