import Image from "next/image";
import React from "react";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { ImageCardType } from "@/data/images";

type ImageTypeWithoutImgs = Omit<ImageCardType, "imgs">;

const ImageCard = ({
  featuredUrl,
  name,
  desc,
  category,
  location,
  year,
  alt = "",
  url,
}: ImageTypeWithoutImgs) => {
  return (
    <Link
      href={url}
      className="group flex flex-col bg-white shadow-lg rounded-md overflow-hidden h-full border-2 border-primary/10"
    >
      <div className="relative w-full h-[20rem] overflow-hidden">
        <Image
          src={featuredUrl}
          fill
          className="object-cover object-center inset-0 group-hover:scale-105 transition-transform duration-300"
          alt={alt}
        />
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-center justify-between gap-8">
          <span className="px-3 py-1 bg-primary text-white text-xs rounded-full font-medium uppercase tracking-wide">
            {category}
          </span>
          <div className="flex items-center gap-1 text-muted-foreground">
            <MapPin size={14} />
            <span className="text-xs">{location}</span>
          </div>
        </div>
        <h3 className="font-bold text-xl">{name}</h3>
        <p className="text-xs text-gray-500">{desc}</p>
        <p className="flex items-center justify-end mt-auto text-xs font-medium text-primary-darker">
          <span className="bg-primary/10 rounded-full px-3 py-1 ">{year}</span>
        </p>
      </div>
    </Link>
  );
};

export default ImageCard;
