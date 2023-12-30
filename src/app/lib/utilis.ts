import mongoose from "mongoose";

export const connectToDB = async () => {
  const connection: any = {};
  try {
    const db: any = await mongoose.connect("mongodb://127.0.0.1:27017/next");
    connection.isConnected = db.connections[0].readyState;
  } catch (error: any) {
    throw new Error("error", error);
  }
};
