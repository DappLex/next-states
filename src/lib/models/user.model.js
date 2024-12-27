import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    ClerkId: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      required: true,
    },
  },
  { timestamp: true }
);


const User = mongoose.models.User || mongoose.model("user", userSchema);
export default User;
