"use client";

import Image from "next/image";

const CircleImage = () => {
  return (
    <div className="bottom-0 right-0 hidden md:inline-block md:absolute">
      <Image
        src="/circle-11.png"
        alt="circles"
        width={200}
        height={200}
        className="w-full h-full rounded-xl"
      />
    </div>
  );
};

export default CircleImage;
