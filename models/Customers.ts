import mongoose, { Schema } from "mongoose";

const customStr1 = {
  type: String,
  required: true,
};

const customerSchema = new Schema(
  {
    amount: customStr1,
    fullname: customStr1,
    email: {
      ...customStr1,
      trim: true,
      lowercase: true,
      match: /^\S+@\S+\.\S+$/,
    },
    address: String,
    apt: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Customers =
  mongoose.models.Customers || mongoose.model("Customers", customerSchema);

export default Customers;
