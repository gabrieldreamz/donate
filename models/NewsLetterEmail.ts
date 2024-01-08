import mongoose, { Schema } from "mongoose";

const newsLetterEmailSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: /^\S+@\S+\.\S+$/,
    unique: true,
  },
});

const NewsLetterEmail =
  mongoose.models.NewsLetterEmails ||
  mongoose.model("NewsLetterEmails", newsLetterEmailSchema);

export default NewsLetterEmail;
