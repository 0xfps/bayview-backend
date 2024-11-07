import { Schema, SchemaTypes, model, models } from "mongoose"

const commentsSchema = new Schema({
    commentId: SchemaTypes.String,
    tokenId: SchemaTypes.String,
    address: SchemaTypes.String,
    comment: SchemaTypes.String,
    date: SchemaTypes.Date
})

const commentsModel = models.commentsModel || model("commentsModel", commentsSchema)
export default commentsModel