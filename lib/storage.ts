import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./firebase";
import { nanoid } from "nanoid";
import { connectMongoDB } from "./db";
import Upload from "@/model/upload";

interface IUpload {
  file: File;
  desc?: string;
}

export const getFile = async (path: string) => {
  try {
    const fileRef = ref(storage, path);
    if (!fileRef) {
      console.log({ ref: "Invalid file ref" });
    }

    return getDownloadURL(fileRef);
  } catch (error) {
    console.log({ error });
  }
};

export const uploadFile = async ({
  file,
  desc,
}: IUpload): Promise<{ success: boolean; message?: string; path?: string }> => {
  try {
    const fileName = nanoid();
    const folder = "wedding-photos";
    const storageRef = ref(
      storage,
      `${folder}/${fileName}.${file.name.split(".").pop()}`
    );

    const upload = await uploadBytes(storageRef, file);

    const registerUpload = await registerUploadToDB({
      path: upload.metadata.fullPath,
      desc: "",
    });

    if (!registerUpload)
      return { success: false, message: "Failed to complete file upload" };

    return { success: true, path: upload.metadata.fullPath };
  } catch (error: any) {
    console.log({ error });
    return { success: false, message: error.message };
  }
};

export const registerUploadToDB = async ({
  path,
  desc,
}: {
  path: string;
  desc?: string;
}) => {
  try {
    // connectMongoDB();
    // const upload = new Upload({
    //   path,
    //   desc,
    //   author: "",
    // });

    // upload.save();

    return true;
  } catch (error) {
    console.log({ error });
    return false;
  }
};
