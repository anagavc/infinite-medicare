import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { PrimaryButton } from "../components/UI/Buttons";
import errorImg from "../images/error.svg";
import { FadeDownAnimation } from "../components/UI/Animations";
import Layout from "../components/Layouts/Layout";
const NotFound = (props) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Layout>
      <div className="w-full flex flex-col bg-pry-50 justify-center items-center h-full">
        <FadeDownAnimation className="bg-pry-50 my-20 h-full rounded drop-shadow w-5/6 lg:w-3/5 mx-auto space-y-6 py-20 px-8  flex-col justify-between ">
          <div className="flex justify-center">
            <h1
              className="text-pry-100 font-heading font-bold text-8xl lg:text-9xl"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              4
            </h1>
            <img
              src={errorImg}
              alt="error"
              className="h-20 w-20 lg:h-40 lg:w-40"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
              data-aos-mirror="true"
              data-aos-once="false"
            />
            <h1
              className="text-pry-100 font-heading font-bold text-8xl lg:text-9xl"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              4
            </h1>
          </div>

          <p className="font-heading text-base text-pry-100 text-center ">
            Sorry, the page you requested for could not be found, kindly check
            the address you have entered.
          </p>
          <div className="w-2/4 mx-auto">
            <PrimaryButton
              name="Home"
              bgColor="pry-100"
              textColor="pry-50"
              borderColor="pry-100"
              py="3"
              path="/"
            />
          </div>
        </FadeDownAnimation>
      </div>
    </Layout>
  );
};
export default NotFound;
