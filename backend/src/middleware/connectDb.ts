import mongoose from "mongoose";

const connectDatabase = () => {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    throw new Error("MONGO_URI is not defined in the environment variables.");
  }

  mongoose.connect(mongoUri)
    .then(() => console.log("Database connected successfully"))
    .catch((error) => console.error("Database connection error: ", error));
};

export default connectDatabase;
