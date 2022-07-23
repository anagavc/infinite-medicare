import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Paragraph } from "../components/UI/FontStyles";
import Input from "../components/UI/Input";
import { PrimaryButton } from "../components/UI/Buttons";
import axios from "axios";
import contact from "../images/contact.svg";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
// import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
const Contact = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
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
  const inputs = [
    {
      title: "Email",
      inputName: "email",
      placeholder: "Enter your email address",
      type: "email",
      register: register,
      errors: errors,
    },
    {
      title: "Your Name",
      inputName: "name",
      placeholder: "Enter your Name",
      type: "text",
      register: register,
      errors: errors,
    },
    {
      title: "Your location",
      inputName: "location",
      placeholder: "Enter your location",
      type: "text",
      register: register,
      errors: errors,
    },
    {
      title: "Enquiry",
      inputName: "wnquiry",
      placeholder: "How can we assist you?",
      type: "text",
      register: register,
      errors: errors,
    },
  ];
  const contactDetails = [
    {
      icon: <EmailIcon />,
      name: "Mail us",
      info: "support@infinitemedicare.netlify.app",
    },
    {
      icon: <QuestionAnswerIcon />,
      name: "Let us talk",
      info: "+234-123-4567-890",
    },
    {
      icon: <LanguageIcon />,
      name: "Our website",
      info: "infinitemedicare.netlify.app",
    },
    {
      icon: <LocationCityIcon />,
      name: "our office address",
      info: "No.2 Shelter Afrique, Uyo",
    },
  ];

  return (
    <div
      id="contact"
      className="bg-pry-100 flex flex-col w-full justify-between items-center py-24 px-4 lg:px-24  space-y-12"
    >
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-sec text-3xl font-bold font-heading">Contact Us</h3>
        <Paragraph
          color="pry-50"
          align="center"
          title="Send us an enquiry on what you would like to know"
        />
      </div>
      <div className=" flex  lg:flex-row flex-col justify-between w-full  bg-pry-50  rounded py-12 space-y-8 px-4 lg:px-12">
        <form
          className=" w-full lg:w-2/5 space-y-6 flex flex-col bg-pry-100 rounded py-6 px-6 lg:pt-6 border-y-4 border-y-sec"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h6 className="text-xl text-center text-pry-50 tracking-tight font-body    w-full">
            Make an enquiry
          </h6>
          {inputs.map((input) => (
            <Input
              title={input.title}
              textColor="pry-50"
              inputName={input.inputName}
              placeholder={input.placeholder}
              type={input.type}
              options={input.options}
              key={input.inputName}
              register={input.register}
              errors={input.errors}
            />
          ))}

          <PrimaryButton
            name="Send Message"
            bgColor="pry-50"
            textColor="pry-100"
            borderColor="pry-100"
            py="3"
          />
        </form>
        <div className="w-full lg:w-3/5 px-4 lg:px-8 flex flex-col space-y-6 ">
          <h6 className="text-lg text-center text-pry-100 tracking-tight font-body uppercase   border-b border-b-pry-100 w-full">
            Our contact information
          </h6>
          <div className="flex flex-wrap flex-col lg:flex-row w-full justify-between  gap-4">
            {contactDetails.map((detail, index) => {
              return (
                <div
                  className="flex flex-col w-60 space-y-0 justify-between "
                  key={index}
                >
                  <div className=" w-8 h-8 text-pry-100 flex justify-center items-center px-4 py-4">
                    {detail.icon}
                  </div>
                  <h5 className="font-body  uppercase tracking-widest font-medium text-pry-100">
                    {detail.name}
                  </h5>
                  <p className="font-body text-base text-pry-100">
                    {detail.info}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="w-full lg:w-2/5 self-end justify-self-end">
            <img src={contact} alt="contact" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
