import { Schema, SchemaTypes, model, models } from "mongoose"

const usersSchema = new Schema({
    address: SchemaTypes.String, // Address is used as user ID.
    username: SchemaTypes.String,
    dateJoined: SchemaTypes.Date
})

const usersModel = models.usersModel || model("usersModel", usersSchema)
export default usersModel