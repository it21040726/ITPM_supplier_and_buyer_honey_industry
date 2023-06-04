import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
let db;

const connect = async () => {
  const MONGODB_URL = process.env.MONGO_URL

  if (db) return;

  mongoose
    .set('strictQuery', true)
    .connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  })
    .then((connection) => {
      db = connection;
      console.log(`DB Synced`);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export { connect };