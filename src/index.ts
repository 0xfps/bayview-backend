import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import "./db/index"

dotenv.config()
const PORT = process.env.PORT ?? 8000

const app = express()

// @todo Configure cors at the end of the project.
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

// GET Routes.
// ---

// POST Routes.
// ---

app.get("/", function (req, res) {
    res.send({
        status: 200,
        msg: "OK",
        data: ["Hola, amigo!"]
    })
})

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}.`)
})