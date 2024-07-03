"use client";

import Image from "next/image";

const CircleImage = () => {
  return (
    <div className="bottom-0 right-0 hidden md:inline-block md:absolute">
      <Image
        src="/circle-11.png"
        width="400"
        height="400"
        className="w-[250px] h-full "
        alt="Particles "
      />
    </div>
  );
};

export default CircleImage;
