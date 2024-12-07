import mongoose from "mongoose"

export const connectMongoDB = async () => {
  try {
    mongoose.connect(process.env.DATABASE_URL!, { socketTimeoutMS: 50000 });
    console.log("Connected to database");
  } catch (e) {
    console.log("Error connecting to database", e);
    process.exit(1);
  }
};
