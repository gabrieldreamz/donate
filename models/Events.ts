import mongoose, { Schema } from "mongoose";

const eventSchema = new Schema({
  img: {
    data: Buffer,
    contentType: String,
  },
  articleName: { type: String, required: true },
  type: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
