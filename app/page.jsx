import { uploadFile } from "./actions/file.js";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <form action={uploadFile}>
          <input type="file" name="profile-image" />
          <input
            type="submit"
            value="upload-image"
            className="border-2 p-2 border-black rounded"
          />
        </form>
      </div>
    </main>
  );
}
