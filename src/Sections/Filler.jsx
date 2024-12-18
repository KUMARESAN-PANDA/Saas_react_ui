import React from 'react'
import img2 from "../assets/xora_public/public/images/screen.jpg"



const Filler = () => {
  return (
    <>
    
   
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center w-full px-5 mt-440 md:mt-0">
    
      {/* Image Section */}
      <div className="order-1 md:order-2 w-full flex justify-center">
        <img 
          src={img2} 
          alt="Hero illustration showing video editing" 
          className="object-cover w-full max-w-4xl h-auto mt-20" 
        />
      </div>

      {/* Text Section */}
      <div className="order-2 md:order-1 w-full">
        
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
        
      </div>
    </div>
    </>
  )
}

export default Filler