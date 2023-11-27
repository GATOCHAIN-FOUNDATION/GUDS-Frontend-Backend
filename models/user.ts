import mongoose, { Schema, model, models } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String },
    confirmPassword: { type: String },
    _firstName: { type: String },
    _lastName: { type: String },
    _profilePicture: { type: String },
    _birthday: { type: String },
    _telegramNick: { type: String },
    _linkedinNick: { type: String },
    _country: { type: String },
    active: { type: Boolean, default: false },
    activateTokens: [
      { type: mongoose.Schema.Types.ObjectId, ref: "ActivateToken" },
    ],
  },
  { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);

export default User;
