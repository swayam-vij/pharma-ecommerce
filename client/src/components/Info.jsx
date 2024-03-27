import React from "react";
import { FaBriefcaseMedical } from "react-icons/fa6";
import { GiBiceps } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { LuBone } from "react-icons/lu";

const Info = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="flex justify-center items-center py-20 lg:py-0">
        <div className="w-full lg:w-1/2 p-4">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left">
            Why Buy Supplements? Here's what Dr.'s have to say about it
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap justify-center lg:justify-start items-center py-20 lg:py-0">
        <div className="w-full lg:w-1/2 p-4">
          <div className="p-4 bg-blue-500 bg-opacity-70 rounded-md">
            <FaBriefcaseMedical size={50} className="mx-auto lg:mx-0" />
            <h3 className="text-xl lg:text-2xl font-bold mb-2 text-center lg:text-left">
              Vitamin D3
            </h3>
            <p className="text-lg lg:text-base text-center lg:text-left">
              Vitamin D3, known as the "sunshine vitamin," is essential for bone
              health, immune function, mood regulation, and more. While sunlight
              and diet provide some, many people may require supplementation.
              Monitoring levels is important to avoid deficiency or toxicity.
              Overall, maintaining adequate vitamin D3 levels is crucial for
              overall health.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <div className="p-4 bg-blue-500 bg-opacity-70 rounded-md">
            <GiBiceps size={50} className="mx-auto lg:mx-0" />
            <h3 className="text-xl lg:text-2xl font-bold mb-2 text-center lg:text-left">
              Protien Powder
            </h3>
            <p className="text-lg lg:text-base text-center lg:text-left">
              Protein powder offers a convenient mean of increasing protein
              intake, fostering muscle repair, supporting muscle growth,
              enhancing weight management. contributing to overall satiety and
              metabolic health.It is also prized for its versatility, seamlessly
              integrating into various recipes and meal plans to meet diverse
              dietary preferences and fitness goals.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <div className="p-4 bg-blue-500 bg-opacity-70 rounded-md">
            <FaUserDoctor size={50} className="mx-auto lg:mx-0" />
            <h3 className="text-xl lg:text-2xl font-bold mb-2 text-center lg:text-left">
              Omega 3,6,9
            </h3>
            <p className="text-lg lg:text-base text-center lg:text-left">
              Revered for their myriad health benefits, omega-3 capsules are
              rich sources of essential fatty acids crucial for brain health,
              cardiovascular function, and mitigating inflammation throughout
              the body. By supporting heart health, cognitive function, and
              overall well-being, omega-3 supplements play a vital role in
              maintaining optimal health.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <div className="p-4 bg-blue-500 bg-opacity-70 rounded-md">
            <LuBone size={50} className="mx-auto lg:mx-0" />
            <h3 className="text-xl lg:text-2xl font-bold mb-2 text-center lg:text-left">
              Calcium
            </h3>
            <p className="text-lg lg:text-base text-center lg:text-left">
              Vital for bone health, calcium supplements are instrumental in
              supporting bone density, reducing the risk of osteoporosis, and
              promoting overall skeletal strength. Calcium aids in muscle
              function, nerve transmission, and maintaining healthy blood
              pressure levels, making it a very necessary supplement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
