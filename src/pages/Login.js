import { NavLink } from "react-router-dom";
import { useState } from "react";
import Input from "../components/UI/Input";
import { PrimaryButton } from "../components/UI/Buttons";
import login from "../images/login.svg";
import { useForm } from "react-hook-form";
import axios from "axios";
const Login = () => {
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
      <div className="bg-pry-100 flex flex-col px-16  py-12 h-full w-2/4 gap-4">
        <div className=" flex justify-between w-full">
          <NavLink
            to="/"
            className="font-heading  hover:text-sec text-lg text-pry-50 font-bold transition duration-300"
          >
            Infinite Medicare
          </NavLink>
        </div>
        <div className="flex flex-col w-full h-full gap-4 items-center justify-center">
          <img src={login} alt="login" className="w-3/5" />
          <h1 className="font-heading text-center text-4xl text-pry-50 font-bold">
            Get access to your medical records globally
          </h1>
          <p className="text-base font-body text-sec text-center w-3/4">
            You can easily get access to your medical records with ease.
          </p>
        </div>
      </div>
      <div className="bg-pry-50  flex flex-col px-16  h-screen w-2/4 gap-4 justify-center py-48 my-auto">
        <h1 className="font-heading  text-3xl text-pry-100 font-bold">Login</h1>
        <form className="flex flex-col  h-full w-full gap-8">
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
            name="Login"
            bgColor="pry-100"
            textColor="pry-50"
            borderColor="pry-100"
            py="3"
          />
        </form>
        <p className="text-base text-pry-100 font-body text-center">
          Dont have an account?{" "}
          <NavLink
            to="/register"
            className="hover:text-sec font-bold transition duration-300"
          >
            Register
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
