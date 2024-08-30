import mongoose,{Schema,model,InferSchemaType} from "mongoose";

const QuoteSchema=new mongoose.Schema({
    Quote: {
        type: String,
        required: true
      },
      Anime: {
        type: String,
        required: true
      },
      Character: {
        type: String,
        required: true
      },
      Category: {
        type: String,
        enum: ['Friend', 'Family', 'Motivation', 'Love', 'Breakup', 'Reality', 'Other'],  // restricts to these categories
        required: true
      },
      Img: {
        type: String,
        default: "Hello"  // default value for the image
      }
})

type quote=InferSchemaType<typeof QuoteSchema>

export const Quote= mongoose.model<quote>("quote",QuoteSchema)