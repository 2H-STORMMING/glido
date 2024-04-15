import mongoose from "mongoose";
import { blogSchema } from "./schema";

export const connect = async () => {
  await mongoose
    .connect(`${process.env.MongoDB_URI}`)
    .then(() => console.log("Connected!"));
};

export const disconnect = async () => {
  await mongoose.disconnect();
};

export const save = async () => {
  connect();

  const MyModel = mongoose.model("Ticket", blogSchema);
  const instance = new MyModel();
  instance.title = "hello";
  await instance.save();
  disconnect();
};
