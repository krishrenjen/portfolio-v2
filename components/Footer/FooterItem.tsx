import React from "react";
import Image from "next/image";

interface FooterItemProps {
  info: {
    title?: string;
    url: string;
    image: string;
  };
}

export default function FooterItem({ info }: FooterItemProps) {
  return (
    <a href={info.url} target="_blank">
      <div
        title={info.title ?? ""}
        className="h-14 w-14 bg-dark-gray rounded-md flex justify-center items-center hover:bg-brand_blue"
      >
        <div className="relative h-10 w-10">
          <Image
            priority={true}
            alt={info.title ?? ""}
            fill={true}
            style={{ objectFit: "contain" }}
            src={info.image}
          />
        </div>
      </div>
    </a>
  );
}
