import { Schema, SchemaTypes, model, models } from "mongoose"

const tokenSchema = new Schema({
    tokenId: SchemaTypes.String,
    name: SchemaTypes.String,
    description: SchemaTypes.String,
    image: SchemaTypes.String, // URL to Cloudinary, I presume.
    address: SchemaTypes.String,
    chain: SchemaTypes.String,
    twitter: SchemaTypes.String,
    telegram: SchemaTypes.String
})

const tokensModel = models.tokensModel || model("tokensModel", tokenSchema)
export default tokensModel