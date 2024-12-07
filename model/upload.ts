import mongoose, { Document, Schema } from "mongoose";

interface IUpload extends Document {
  path: string;
  desc?: string;
  author: string;
}

const UploadSchema = new Schema({
  path: { type: String, required: true },
  desc: String,
  author: String,
});

const Upload =
  mongoose.models.Upload || mongoose.model<IUpload>("Upload", UploadSchema);

export default Upload;
