import React from "react";
import testone from "../assets/xora_public/public/images/testimonials/alicia-barker.png";
import testwo from "../assets/xora_public/public/images/testimonials/becky-snider.png";

import testfour from "../assets/xora_public/public/images/testimonials/jim-bradley.png";



const Testimonial = () => {
  const testimonials = [
    {
      name: "Alicia Barker",
      position: "Software Engineer",
      feedback:
        "This platform has revolutionized the way I work. It's intuitive, efficient, and simply amazing!",
      imgPath: testone,
    },
    {
      name: "Becky Snider",
      position: "Creative Designer",
      feedback:
        "I can't imagine my work life without this tool. It's a game-changer for sure!",
      imgPath: testwo,
    },
  
    {
        name: "jim-bradley",
        position: "Software Engineer",
        feedback:"The simplicity and power of this platform are unparalleled. Highly recommend it!",
        imgPath: testfour,
      }
  ];

  return (
    <>
    <div className="bg-s1 py-16 px-6 md:px-12 lg:px-20 md:mt-0 mt-60">
      <h2 className="text-4xl font-bold text-center text-p4 mb-10">
        What People Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-s1 to-s4 border-p4 border shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
          >
            {/* Testimonial Image */}
            <img
              src={testimonial.imgPath}
              alt={`${testimonial.name}'s photo`}
              className="w-22 h-22 rounded-full mb-4 shadow-md object-cover"
            />
            {/* Name and Position */}
            <h3 className="text-xl font-semibold text-p4 mb-1">
              {testimonial.name}
            </h3>
            <p className="text-sm text-p3 font-light mb-3">
              {testimonial.position}
            </p>
            {/* Feedback */}
            <p className="text-p4 italic text-sm">
              "{testimonial.feedback}"
            </p>
          </div>
        ))}
      </div>
    </div>
    <h2 className="text-4xl font-bold text-center m-2 mt-4 text-p4 ">
        Amazing Features
    </h2>
    </>
  );
};

export default Testimonial;
