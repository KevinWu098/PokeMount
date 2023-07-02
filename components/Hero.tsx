"use client";

import Image from "next/image"
import CustomButton from "./CustomButton"

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, buy, or rent a mount — hassle-free!
        </h1>

        <p className="hero__subtitle">
          Streamline your Pokèmon experience 
          with our effortless booking process.
        </p>

        <CustomButton 
          title="Explore Mounts"
          containerStyles="bg-red-600 text-white rounded-full mt-10 drop-shadow-md"
          handleClick={handleScroll}
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/koraidon-hero.png" alt="koraidon-hero" fill priority className="object-contain" />
        </div>
        <div className="hero__image-overlay"/>
      </div>
    </div>
  )
}

export default Hero