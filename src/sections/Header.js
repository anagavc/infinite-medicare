import {
  FadeDownAnimation,
  FadeUpAnimation,
} from "../components/UI/Animations";
import { PrimaryButton, SecondaryButton } from "../components/UI/Buttons";
import heroImg from "../images/doctor.png";
const Header = () => {
  return (
    <div className="flex  lg:flex-row flex-col justify-center items-center  lg:mt-0  h-full w-full bg-pry-100 ">
      <FadeUpAnimation className=" bg-pry-100 flex  px-8 lg:px-28 flex-col mt-24 lg:mt-0 space-y-10 lg:space-y-8 justify-around h-full w-full md:w-3/5">
        <p className="font-body text-sm text-pry-100 font-bold bg-sec py-2 rounded w-full lg:w-3/5 flex justify-center items-center mt-4">
          Welcome to Infinite Medicare
        </p>
        <h1 className=" text-3xl lg:text-6xl leading-8 text-left font-heading font-bold text-sec">
          Leaders In{" "}
          <span className="text-pry-50 inline-block  mr-2">Quality</span>
          Healthcare Services
        </h1>

        <p className="font-body text-base  text-pry-50 text-justify">
          We offer you exceptional healthcare options, with your full recovery
          being our utmost goal.
        </p>
        <div className="lg:flex hidden flex-row space-x-4 mb-6 z-50">
          <SecondaryButton
            name="Book an appointment"
            path="/contact"
            bgColor="pry-100"
            textColor="pry-50"
            borderColor="pry-50"
            py="4"
          />
          <PrimaryButton
            name="Get Started"
            path="/login"
            bgColor="pry-50"
            textColor="pry-100"
            borderColor="pry-100"
            py="4"
          />
        </div>
      </FadeUpAnimation>

      <FadeDownAnimation className="w-full flex items-center justify-center h-4/5 lg:w-2/5 lg:h-full bg-pry-100 ">
        <img
          src={heroImg}
          alt="Hero"
          className="w-4/5 h-full bg-sec px-12 pt-2 mt-12 rounded lg:rounded-none"
        />
      </FadeDownAnimation>
      <div className="lg:hidden my-12 w-4/5 justify-between h-full flex-col flex gap-4">
        <PrimaryButton
          name="Get Started"
          path="/login"
          bgColor="pry-50"
          textColor="pry-100"
          borderColor="pry-100"
          py="4"
        />
        <SecondaryButton
          name="Book an appointment"
          path="/contact"
          bgColor="pry-100"
          textColor="pry-50"
          borderColor="pry-50"
          py="6"
        />
      </div>
    </div>
  );
};

export default Header;
