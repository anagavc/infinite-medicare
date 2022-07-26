import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { PaymentDialog } from "../components/Layouts/Modal";
import { Paragraph } from "../components/UI/FontStyles";
import Input from "../components/UI/Input";
import { PrimaryButton } from "../components/UI/Buttons";
import contact from "../images/contact.svg";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import { useDispatch, useSelector } from "react-redux";
// import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { makeAppointment } from "../api/apiCalls";
import { FadeUpAnimation } from "../components/UI/Animations";
const Contact = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const dispatch = useDispatch();
  const { error, isFetching } = useSelector((state) => state.appointment);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    makeAppointment(dispatch, data);
    setShowModal(true);
    setModalType("payment");
    reset();
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
      title: "Select specialty",
      inputName: "specialty",
      type: "select",
      options: ["Dermatology", "Urology", "Gynaecology"],
      register: register,
      errors: errors,
    },
    {
      title: "Pick an appointment date",
      inputName: "date",
      placeholder: "Pick a date",
      type: "date",
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
      {modalType === "payment" && (
        <PaymentDialog showModal={showModal} setShowModal={setShowModal} />
      )}
      <FadeUpAnimation className="flex flex-col items-center justify-center">
        <h3 className="text-sec text-3xl font-bold font-heading">Contact Us</h3>
        <Paragraph
          color="pry-50"
          align="center"
          title="Book an appoinment to see a consultant"
        />
      </FadeUpAnimation>
      <FadeUpAnimation className=" flex  lg:flex-row flex-col justify-between w-full  bg-pry-50  rounded py-12 space-y-8 px-4 lg:px-12">
        <form
          className=" w-full lg:w-2/5 space-y-4 flex flex-col bg-pry-100 rounded py-8 px-6 lg:pt-6 border-y-4 border-y-sec"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h6 className="text-xl text-center text-pry-50 tracking-tight font-body  w-full">
            Book an appointment
          </h6>
          {error && (
            <p className="text-pry-100 font-normal text-base font-body">
              There was an error while booking the appointment
            </p>
          )}
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
              errorColor="pry-50"
            />
          ))}
          <PrimaryButton
            name="Book appointment"
            isFetching={isFetching}
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
      </FadeUpAnimation>
    </div>
  );
};

export default Contact;
