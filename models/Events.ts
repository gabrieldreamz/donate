import mongoose, { Schema } from "mongoose";

const eventSchema = new Schema({
  img: String,
  articleName: { type: String, required: true },
  type: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: [String], required: true },
  location: { type: String, required: true },
  totalFunds: { type: Number, required: true },
  fundsRaised: { type: Number, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Events = mongoose.models.Events || mongoose.model("Events", eventSchema);

export default Events;
