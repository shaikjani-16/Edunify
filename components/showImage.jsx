import { Image } from "cloudinary-react";

export default function ShowImage({ imageid }) {
  return (
    <div className="relative w-full h-48">
      <Image
        cloudName="dnnjgmqo0"
        publicId={imageid}
        width="400"
        height="400"
        quality="auto"
        fetchFormat="auto"
        crop="scale"
        alt="School Image"
        className="object-cover w-full h-full"
      />
    </div>
  );
}
