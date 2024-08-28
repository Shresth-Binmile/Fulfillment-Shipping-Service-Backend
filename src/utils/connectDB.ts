import mongoose from "mongoose";
import ENV from "../config/server-config";

async function connectDB() {
    await mongoose.connect(ENV.MONGO_URI, {
        dbName: 'E-Commerce'
    })
}

export default connectDB