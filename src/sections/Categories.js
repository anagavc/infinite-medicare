import React from "react";
import {
  Vaccines,
  MedicalInformation,
  MonitorHeart,
} from "@mui/icons-material";
const Categories = () => {
  const categories = [
    {
      name: "Vaccinations",
      icon: <Vaccines />,
      description: "We are duly licensed to issue vaccinations",
    },
    {
      name: "Documented records",
      icon: <MedicalInformation />,
      description: " Exceptional in medical documentation",
    },
    {
      name: "Specialists in Heart operations",
      icon: <MonitorHeart />,
      description: "Specialists in heart surgeries",
    },
  ];
  return (
    <div className="w-5/6  bg-pry-50 flex space-x-4 drop-shadow px-8 py-8 rounded-xl justify-around absolute top-full -mt-20">
      {categories.map((category) => (
        <div className="flex space-x-4 flex-1" key={category.name}>
          <div className="bg-pry-100 rounded text-pry-50 w-20 flex items-center justify-center">
            {category.icon}
          </div>
          <div className="flex flex-col gap-2 w-full">
            <h6 className="text-pry-100 font-bold text-lg font-heading ">
              {category.name}
            </h6>
            <p className="text-pry-100 text-base font-heading top">
              {category.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
