import React from "react";
import {
  Vaccines,
  MedicalInformation,
  MonitorHeart,
} from "@mui/icons-material";
const Categories = () => {
  return (
    <div className="w-full bg-pry-50 flex space-x-4 drop-shadow px-24 py-8  justify-around ">
      <div className="flex space-x-4 flex-1">
        <div className="bg-pry-100 rounded text-pry-50 w-20 flex items-center justify-center">
          <Vaccines />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h6 className="text-pry-100 font-bold text-lg font-heading ">
            Vaccinations
          </h6>
          <p className="text-pry-100 text-base font-heading top">
            We are duly licensed to issue vaccinations
          </p>
        </div>
      </div>
      <div className="flex space-x-4 flex-1">
        <div className="bg-pry-100 rounded text-pry-50 w-20 flex items-center justify-center">
          <MedicalInformation />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h6 className="text-pry-100 font-bold text-lg font-heading ">
            Well documented records
          </h6>
          <p className="text-pry-100 text-base font-heading top">
            Exceptional in medical documentation
          </p>
        </div>
      </div>
      <div className="flex space-x-4 flex-1">
        <div className="bg-pry-100 rounded text-pry-50 w-20 flex items-center justify-center">
          <MonitorHeart />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h6 className="text-pry-100 font-bold text-lg font-heading ">
            Specialists in Heart operations
          </h6>
          <p className="text-pry-100 text-base font-heading top">
            Specialists in heart surgeries
          </p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
