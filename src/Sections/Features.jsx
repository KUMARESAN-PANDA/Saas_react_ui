import React from "react";
import img3 from "../assets/xora_public/public/images/feature-1.png";
import img4 from "../assets/xora_public/public/images/feature-2.png";
import btnicon from "../assets/xora_public/public/images/detail-1.png";
import icon2 from "../assets/xora_public/public/images/detail-2.png";
import icon3 from "../assets/xora_public/public/images/detail-3.png";
import icon4 from "../assets/xora_public/public/images/detail-4.png";
import Button from "../Components/Button";

const Features = () => {
  return (
    <div className="grid grid-cols-1 p-5 gap-5 md:grid-cols-2 md:gap-0 xl:mb-0">
      {/* First Box */}
      <div className="rounded-xl border-s3 bg-gradient-to-r from-s3 to-s2 shadow-500 flex flex-col px-3 py-5 
                      md:rounded-l-lg md:rounded-none md:border-r-0">
        <img src={img3} alt="Feature 1" className="max-h-25 max-w-20 mt-3 ml-2" />
        <h1 className="text-p3 text-poppins tracking-widest text-left">Smart-Ai</h1>
        <h1 className="text-2xl md:text-6xl xl:text-8xl font-inter font-bold text-p4 text-left mb-3">
          SIMPLE
        </h1>
        <p className="text-p4 font-poppins font-extralight xl:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum odit aperiam, dolorum ratione quos harum!
        </p>
        <div>
          <Button imgurl={btnicon} cont={"try it now"} />
        </div>
        <div className="hidden md:flex gap-2  justify-around items-center m-3">
            <div className="flex flex-col items-center justify-center">
            <img src={btnicon} alt="" className="object-cover max-h-15 max-w-20 m-2"/>
            <h1 className="text-p4 text-poppins tracking-widest text-left">Ai-powered </h1>
            </div>
            <div className="flex flex-col items-center justify-center">
            <img src={icon2} alt="" className="object-cover max-h-15 max-w-20 m-2"/>
            <h1 className="text-p4 text-poppins tracking-widest text-center">Strong Community</h1>
            </div>

            

        </div>
      </div>

      {/* Second Box */}
      <div className="rounded-xl border-s3 bg-gradient-to-r from-s2 to-s3 shadow-500 flex flex-col px-3 py-5 
                      md:rounded-r-lg md:rounded-none md:border-l-0">
        <img src={img4} alt="Feature 2" className="max-h-25 max-w-20 mt-3 ml-2" />
        <h1 className="text-p3 text-poppins tracking-widest text-left">Ai-assistant</h1>
        <h1 className="text-2xl md:text-6xl xl:text-8xl font-inter font-bold text-p4 text-left mb-3">
          SIMPLE
        </h1>
        <p className="text-p4 font-poppins font-extralight xl:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum odit aperiam, dolorum ratione quos harum!
        </p>
        <div>
          <Button imgurl={btnicon} cont={"try it now"} />
        </div>
        <div className="hidden md:flex gap-2  justify-around items-center m-3">
            <div className="flex flex-col items-center justify-center">
            <img src={icon3} alt="" className="object-cover max-h-15 max-w-20 m-2"/>
            <h1 className="text-p4 text-poppins tracking-widest text-left">24/7 Support </h1>
            </div>
            <div className="flex flex-col items-center justify-center">
            <img src={icon4} alt="" className="object-cover max-h-15 max-w-20 m-2"/>
            <h1 className="text-p4 text-poppins tracking-widest text-center">Ai-chatbot</h1>
            </div>

            

        </div>
      </div>
    </div>
  );
};

export default Features;
