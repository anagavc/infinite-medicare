import Input from "../components/UI/Input";
import NavBar from "../components/Navigation/NavBar";
import registerImg from "../images/register.svg";
import Footer from "../components/Layouts/Footer";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Home, LocalHospital } from "@mui/icons-material";
import { PrimaryButton } from "../components/UI/Buttons";
import { useForm } from "react-hook-form";
const Register = () => {
  const [isFetching, setisFetching] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    setisFetching(true);
    try {
      const res = await axios.post("/api/contact/info", { data });
      setisFetching(false);
      reset();
      //   toast.success(`Your request has been sent,we will get back to you soon.`);
    } catch (error) {
      console.log(error);
      setisFetching(false);
    }
  };
  return (
    <div className="h-screen flex justify-center items-center w-full ">
      <div className="bg-pry-100 lg:flex flex-col px-16 hidden py-12 h-full w-2/4 gap-4">
        <div className="flex items-center h-full">
          <NavLink to="/">
            <span className="text-xl font-bold cursor-pointer text-pry-50 gap-2 font-heading justify-center hover:text-sec transition duration-300  flex items-center">
              <LocalHospital />
              Infinite Medicare
            </span>
          </NavLink>
        </div>
        <div className="flex flex-col w-full h-full gap-4 items-center justify-center">
          <img src={registerImg} alt="Register" className="w-3/5" />
          <h1 className="font-heading text-center text-4xl text-pry-50 font-bold">
            Get access to premium healthcare service
          </h1>
          <p className="text-base font-body text-sec text-center w-3/4">
            We offer you a premium way of living when it comes to taking care of
            your health.
          </p>
        </div>
      </div>
      <div className="bg-pry-50  flex flex-col  lg:px-16  lg:h-screen w-full lg:w-2/4 lg:gap-4 gap-8  justify-center  lg:py-48 my-auto">
        <NavLink
          className="text-pry-100 hover:text-sec transition duration-300 px-6 "
          to="/"
        >
          <Home />
        </NavLink>
        <div className="lg:hidden flex w-full  h-full">
          <NavBar />
        </div>
        <h1 className="font-heading  text-3xl text-pry-100 font-bold px-6 mt-28 lg:mt-12">
          Register
        </h1>
        <form
          className="flex flex-col  h-full w-full gap-8 px-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            title="Email Address"
            textColor="pry-100"
            inputName="email"
            placeholder="Enter your email address"
            type="text"
            register={register}
            errors={errors}
          />
          <Input
            title="Username"
            textColor="pry-100"
            inputName="username"
            placeholder="Enter your username"
            type="text"
            register={register}
            errors={errors}
          />
          <Input
            title="Password"
            textColor="pry-100"
            inputName="password"
            placeholder="Enter your password"
            type="password"
            register={register}
            errors={errors}
          />
          <PrimaryButton
            name="Register"
            bgColor="pry-100"
            textColor="pry-50"
            borderColor="pry-100"
            py="3"
          />
          <p className="text-base text-pry-100 font-body text-center">
            Already have an account?{" "}
            <NavLink
              to="/login"
              className="hover:text-sec font-bold transition duration-300"
            >
              Login
            </NavLink>
          </p>
        </form>
        <div className="lg:hidden block w-full ">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Register;
