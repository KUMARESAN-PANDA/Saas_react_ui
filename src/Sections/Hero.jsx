import React from "react";
import img2 from "../assets/xora_public/public/images/hero.png";
import Button from "../Components/Button";
import img3 from "../assets/xora_public/public/images/zap.svg";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center w-full px-5">
      {/* Image Section */}
      <div className="order-1 md:order-2 w-full flex justify-center">
        <img 
          src={img2} 
          alt="Hero illustration showing video editing" 
          className="object-cover w-full max-w-4xl h-auto" 
        />
      </div>

      {/* Text Section */}
      <div className="order-2 md:order-1 w-full">
        <h1 className="text-p3 text-poppins tracking-widest text-left ml-2">
          video editing
        </h1>
        <h1 className="text-4xl md:text-6xl xl:text-8xl font-inter font-semibold md:font-bold text-p4 text-left">
          AMAZINGLY
        </h1>
        <h1 className="text-4xl md:text-6xl xl:text-8xl font-inter font-semibold md:font-bold text-p4 text-left mb-3">
          SIMPLE
        </h1>
        <p className="text-p4 font-poppins font-extralight xl:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum odit
          aperiam, dolorum ratione quos harum!
        </p>
        <Button imgurl={img3} cont={"try it now"} />
      </div>
    </div>
  );
};

export default Hero;
