import { PrimaryButton, SecondaryButton } from "../components/Buttons";

import heroImg from "../images/doctor.png";
// import { FadeDownAnimation, FadeUpAnimation } from "./Animations";
const Header = () => {
  return (
    <div className="flex   justify-center items-center  lg:mt-0  lg:h-screen w-full">
      <div className=" bg-pry-100 flex  px-32  flex-col  space-y-12 justify-center h-full w-full lg:w-3/5 ">
        <p className="font-body text-lg text-pry-50 font-bold">
          Welcome to Infinite Medicare
        </p>
        <h1 className=" text-3xl lg:text-6xl leading-8 text-center lg:text-left font-heading font-bold text-sec">
          Leaders In{" "}
          <span className="text-pry-50 inline-block  mr-2">Quality</span>
          Healthcare Services
        </h1>

        <p className="font-body text-base lg:text-sm text-center text-pry-50 lg:text-justify">
          We offer you exceptional healthcare options, with your full recovery
          being our utmost goal.
        </p>
        <div className="lg:flex hidden flex-row space-x-4">
          <PrimaryButton
            name="Request a quote"
            path="#contact"
            bgColor="pry-50"
            textColor="pry-100"
            borderColor="pry-100"
            py="4"
          />
          <SecondaryButton
            name="Explore"
            path="#track"
            bgColor="pry-100"
            textColor="pry-50"
            borderColor="pry-50"
            py="4"
          />
        </div>
      </div>

      <div className="w-full flex items-center justify-center h-4/5 lg:w-2/5 lg:h-full bg-pry-100 ">
        <img
          src={heroImg}
          alt="Hero"
          className="w-4/5 bg-sec rounded px-12 pt-2 mt-12"
        />
      </div>
      <div className="lg:hidden mb-12 w-full flex-col flex  space-y-2">
        <PrimaryButton
          name="Track your order"
          bgColor="sec"
          py="4"
          text="pry-50"
          hoverText="pry-100"
          hoverBg="pry-50"
          path="/#track"
        />
        <SecondaryButton
          name="Request a quote"
          borderColor="pry-50"
          py="4"
          text="pry-50"
          hoverText="pry-100"
          hoverBg="pry-50"
          path="/#contact"
        />
      </div>
    </div>
  );
};

export default Header;
