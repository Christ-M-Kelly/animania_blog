import { put } from "@vercel/blob";

interface FileWithName extends Blob {
  name: string;
}

export async function uploadImage(file: FileWithName): Promise<string> {
  const { url } = await put(file.name, file, {
    access: "public",
  });
  return url;
}
