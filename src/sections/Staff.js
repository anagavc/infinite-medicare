import { FacebookRounded } from "@mui/icons-material";
import gynaecology from "../images/gynaecology.png";
import { NavLink } from "react-router-dom";
const Staff = () => {
  return (
    <div className="bg-pry-50 flex flex-col space-y-12 px-24 w-full h-full py-20 ">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h3 className="font-heading text-2xl text-pry-100 font-bold uppercase">
          Our Consultants
        </h3>
        <p className="font-heading text-base text-pry-100 ">
          Here are our Lead Consultants
        </p>
      </div>
      <div className="w-full flex justify-between space-x-8 h-full">
        <div className="flex flex-col bg-pry-100 w-2/6 p-8 rounded-lg space-y-4">
          <div className="bg-sec relative flex flex-col justify-center items-center mb-4">
            <img src={gynaecology} alt="gynaecologists rounded-lg" />
            <div className="rounded-full bg-pry-100 drop-shadow flex items-center w-4/5 justify-center absolute top-full -mt-6 border border-sec mx-auto py-2 px-4">
              <p className="text-sec font-body font-bold text-base">
                Chief Gynaecologist
              </p>
            </div>
          </div>
          <h6 className="font-heading text-lg text-sec font-bold uppercase mt-24">
            Dr. Vicky Vicky
          </h6>
          <p className="font-heading text-justify text-base text-pry-50 ">
            Dr. Vivky completed his training in Lisbon Portugal while
            specilaizing in Gynaecology, with over 20 years of expereince she
            has beeb exceptional when it comes to childbirth delivery
          </p>
          <div className="flex w-full space-x-4">
            <NavLink
              to="ww.facebook.com"
              className="text-pry-100 bg-sec rounded-full  hover:text-pry-200 transition duration-300 p-1 flex justify-center items-center"
            >
              <FacebookRounded />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;
