import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: /^\S+@\S+\.\S+$/,
    },
    message: {
      type: String,
      required: true,
    },
    foundus: {
      type: String,
      required: true,
    },
    help: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const ContactUs =
  mongoose.models.Contactus || mongoose.model("Contactus", contactSchema);

export default ContactUs;
