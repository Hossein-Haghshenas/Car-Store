"use client";
import Image from "next/image";
// Components
import { Button } from ".";

const Hero = () => {
  // handle scroll functionality
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        {/* hero title */}
        <h1 className="hero__title">
          Find, book, or rent a car -- quickly and easily!
        </h1>
        {/* hero subtitle */}
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        {/* hero btn */}
        <Button
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          onClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        {/* hero car image */}
        <div className="hero__image">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* hero car background */}
        <div className="hero__image-overlay"></div>
      </div>
    </div>
  );
};

export default Hero;
