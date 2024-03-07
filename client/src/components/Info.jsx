import React from "react";
import { FaBriefcaseMedical } from "react-icons/fa6";
import { GiBiceps } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { GiHypodermicTest } from "react-icons/gi";
import { LuBone } from "react-icons/lu";
const Info = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0 flex flex-wrap items-center justify-center py-20">
        <div className="w-full p-4">
          <h1 className="flex text-3xl font-bold mb-4 justify-center items-center">
            Why Buy Supplements? Here's what Dr.'s have to say about it
          </h1>
        </div>

        <div className="w-full lg:w-1/2 p-4">
          <div className="p-4 bg-blue-500 bg-opacity-70 rounded-md">
            <FaBriefcaseMedical size={50} />
            <h3 className="text-xl font-bold mb-2">Vitamin D3</h3>
            <p className="text-lg">
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
            <GiBiceps size={50} />
            <h3 className="text-xl font-bold mb-2">Protien Powder</h3>
            <p className="text-lg">
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
            <FaUserDoctor size={50} />
            <h3 className="text-xl font-bold mb-2">Omega 3,6,9</h3>
            <p className="text-lg">
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
            <LuBone size={50} />
            <h3 className="text-xl font-bold mb-2">Calcium</h3>
            <p className="text-lg">
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
