import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  const mongoDbString = process.env.DB_STRING;

  if (!mongoDbString) {
    throw new Error("DB_STRING is not set in environment variables");
  }

  try {
    const conn = await mongoose.connect(mongoDbString);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.warn("MongoDB disconnected");
});

mongoose.connection.on("error", (err: any) => {
  console.error("MongoDB connection error:", err);
});

export default connectDB;

