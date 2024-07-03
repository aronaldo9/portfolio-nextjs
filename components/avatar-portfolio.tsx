"use client";

import Image from "next/image";
import MotionTransition from "./transition-component";

const AvatarPortfolio = () => {
  return (
    <MotionTransition
      position="bottom"
      className="bottom-0 left-0 hidden md:block md:absolute"
    >
      <Image
        src="/avatar-works1.png"
        width={300}
        height={300}
        className="w-full h-full"
        alt="Avatar portfolio"
      />
    </MotionTransition>
  );
};

export default AvatarPortfolio;
