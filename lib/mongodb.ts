import mongoose from "mongoose";
const MONGO_URI = "mongodb+srv://ssameershah1200:fsuheocdNSHmLZjJ@cluster0.klfmnwd.mongodb.net/GUDS"
export const connectMongoDB = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
  }
};
