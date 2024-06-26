import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Star {
  src: string;
  title: string;
  link: string;
}
function Star({ src, title, link }: Star) {
  return (
    <Link href={link} className="block" title={title}>
      <Image
        src={src}
        width={400}
        height={500}
        alt={title}
        className="rounded-full w-[116px] h-[116px] md:w-[190px] md:h-[190px]"
      />
      <h3 className="text-center mt-3 text-xs md:text-sm">{title}</h3>
    </Link>
  );
}

export default Star;
