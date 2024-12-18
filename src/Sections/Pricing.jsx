import React from "react";
import Button from "../Components/Button";
import img3 from "../assets/xora_public/public/images/zap.svg";
import tickimg from "../assets/xora_public/public/images/check.png";
import legendImg from "../assets/xora_public/public/images/plan-1.png"; // Add your legend image here
import legendImg2 from "../assets/xora_public/public/images/plan-2.png";
import legendImg3 from "../assets/xora_public/public/images/plan-3.png";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$19/month",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      path:legendImg
    },
    {
      name: "Pro",
      price: "$49/month",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
      path:legendImg2
    },
    {
      name: "Enterprise",
      price: "$99/month",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
      path:legendImg3
    },
  ];

  return (
    <div className="bg-s1 py-16 px-6 md:px-12 lg:px-20 mt-20 md:mt-5 xl:mt-0">
      <h2 className="text-4xl font-bold text-center mb-6 text-p4">
        Choose Your Plan
      </h2>
      <p className="text-center text-p3 mb-12">
        Select the plan that best suits your needs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {plans.map((plan, index) => (
          <fieldset
            key={index}
            className={`border rounded-lg shadow-lg bg-gradient-to-r from-s3 to-s2 border-p4 p-6 relative`}
          >
            {/* Centered Legend with Image */}
            <legend className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white  rounded-full shadow-md flex justify-center items-center">
              <img
                src={plan.path}
                alt={`${plan.name} Legend`}
                className="h-20 w-auto"
              />
            </legend>
            <h3 className="text-2xl font-semibold text-p4 mb-4 text-center mt-10">
              {plan.name}
            </h3>
            <p className="text-4xl font-bold text-p4 mb-6 text-center">
              {plan.price}
            </p>
            <ul className="mb-6 space-y-3">
              {plan.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="text-p3 flex items-center space-x-2"
                >
                  <img
                    src={tickimg}
                    alt="Tick"
                    className="h-6 w-6"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              className={`border-p4 flex items-center gap-2 py-2 px-3 mt-3 rounded-lg bg-s2 shadow-300 hover:shadow-100 md:mt-5 xl:px-6 xl:py-3 text-p4 ${
                index === 1
                  ? "bg-p4 hover:bg-opacity-90"
                  : "bg-p3 hover:bg-opacity-90"
              }`}
            >
              Get Started
            </button>
          </fieldset>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
