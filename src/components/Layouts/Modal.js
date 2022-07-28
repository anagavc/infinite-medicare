import Input from "../UI/Input";
import Dialog from "@mui/material/Dialog";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  bookAppointment,
  makeAppointment,
  updateUserInfo,
  updateUserPassword,
} from "../../api/apiCalls";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import { PaystackButton } from "react-paystack";
import { PrimaryButton } from "../UI/Buttons";
export const BookDialog = ({ showModal, setShowModal }) => {
  const [modalType, setModalType] = useState("details");
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const handleClose = () => {
    setShowModal(!showModal);
  };
  const { currentUser } = useSelector((state) => state.user);

  const { appointments } = useSelector((state) => state.appointment);
  const handlePaystackSuccessAction = (appointment) => {
    bookAppointment(dispatch, {
      email: currentUser.email,
      name: currentUser.name,
      ...appointments,
    });
    handleClose();
  };
  const handlePaystackCloseAction = () => {
    console.log("closed");
    handleClose();
  };
  const componentProps = {
    aapointment: appointments,
    reference: new Date().getTime().toString(),
    email: currentUser?.email,
    amount: 200000,
    publicKey: "pk_test_dfe822981cc4a0d3d96f802f178d1ff62953e120",
    text: "Make Payment",
    onSuccess: (appointment) => handlePaystackSuccessAction(appointment),
    onClose: handlePaystackCloseAction,
  };
  const onSubmit = async (data) => {
    makeAppointment(dispatch, data);
    setShowModal(true);
    setModalType("payment");
    reset();
  };

  return (
    <div>
      {modalType === "details" && (
        <Dialog open={showModal} onClose={handleClose}>
          <div className="flex flex-col justify-between gap-4 px-4 lg:px-8 py-6">
            <h1 className="text-lg font-body font-bold text-pry-100">
              Book an appointment
            </h1>
            <p className="text-base font-body text-pry-100">
              To book an appointment with the doctor, fill in the required
              information
            </p>

            <form
              className="flex flex-col  h-full w-full gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                title="Specialty"
                textColor="pry-100"
                inputName="specialty"
                placeholder="Select specialty"
                type="select"
                options={["Dermatology", "Gynaecology", "Family Health"]}
                register={register}
                errors={errors}
                errorColor="pry-100"
              />
              <Input
                title="Date"
                textColor="pry-100"
                inputName="date"
                type="date"
                register={register}
                errors={errors}
                errorColor="pry-100"
              />

              <PrimaryButton
                name="Book"
                bgColor="pry-100"
                textColor="pry-50"
                borderColor="pry-100"
                py="3"
                click={handleClose}
              />
              <button
                className="text-pry-100 font-body hover:text-sec transition duration-300"
                onClick={handleClose}
              >
                Cancel
              </button>
            </form>
          </div>
        </Dialog>
      )}
      {modalType === "payment" && (
        <Dialog open={showModal} onClose={handleClose}>
          <div className="flex flex-col justify-between gap-8 px-4 lg:px-8 py-12">
            <h1 className="text-lg font-body font-bold text-pry-100">
              Confirm appointment
            </h1>
            <p className="text-base font-body text-pry-100">
              Hi, {currentUser.name} to confirm your appointment on{" "}
              {appointments.date} with a {appointments.specialty} consultant,
              click on the make payment button to pay with Paystack. Thank you
            </p>
            <PaystackButton
              {...componentProps}
              type="submit"
              onClick={handleClose}
              className="text-base bg-pry-100 py-3 text-pry-50 hover:text-pry-50 hover:bg-sec rounded-full flex justify-center w-full items-center  px-8 font-body transition duration-300"
            />
          </div>
        </Dialog>
      )}
    </div>
  );
};
export const PasswordDialog = ({ showModal, setShowModal }) => {
  const { isFetching, error, currentUser } = useSelector((state) => state.user);
  const userID = currentUser._id;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClose = () => {
    setShowModal(!showModal);
  };
  const onSubmit = async (data) => {
    console.log(data);
    updateUserPassword(userID, data, dispatch, navigate);
    reset();
    // setShowModal(false);
  };
  return (
    <div>
      <Dialog open={showModal} onClose={handleClose}>
        <div className="flex flex-col justify-between gap-4 px-4 lg:px-8 py-6">
          <h1 className="text-lg font-body font-bold text-pry-100">
            Change password
          </h1>
          <p className="text-base font-body text-pry-100">
            To change your password, enter your old password and you new
            password.
          </p>
          {error && (
            <p className="text-pry-100 font-normal text-base font-body">
              Your old password does not match your new password
            </p>
          )}
          <form
            className="flex flex-col  h-full w-full gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              title="Old Password"
              textColor="pry-100"
              inputName="oldPassword"
              placeholder="Enter your old password"
              type="password"
              register={register}
              errors={errors}
              errorColor="pry-100"
            />
            <Input
              title="New Password"
              textColor="pry-100"
              inputName="newPassword"
              placeholder="Enter your new password"
              type="password"
              register={register}
              errors={errors}
              errorColor="pry-100"
            />
            <PrimaryButton
              name="Submit"
              isFetching={isFetching}
              bgColor="pry-100"
              textColor="pry-50"
              borderColor="pry-100"
              py="3"
              // click={handleClose}
            />
            <button
              className="text-pry-100 font-body hover:text-sec transition duration-300"
              onClick={handleClose}
            >
              Cancel
            </button>
          </form>
        </div>
      </Dialog>
    </div>
  );
};

export const AccountDialog = ({ showModal, setShowModal }) => {
  const { isFetching, error, currentUser } = useSelector((state) => state.user);
  const userID = currentUser._id;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClose = () => {
    setShowModal(!showModal);
  };
  const onSubmit = async (data) => {
    updateUserInfo(userID, data, dispatch, navigate);
    reset();
    setShowModal(false);
  };
  return (
    <div>
      <Dialog open={showModal} onClose={handleClose}>
        <div className="flex flex-col justify-between gap-4 px-4 lg:px-8 py-6">
          <h1 className="text-lg font-body font-bold text-pry-100">
            Update account
          </h1>
          <p className="text-base font-body text-pry-100">
            To update your account, enter the information you want to update.
          </p>
          {error && (
            <p className="text-pry-100 font-normal text-base font-body">
              There was a error in updating your account
            </p>
          )}
          <form
            className="flex flex-col  h-full w-full gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              title="Name"
              textColor="pry-100"
              inputName="name"
              placeholder="Enter your Full Name"
              type="text"
              register={register}
              errors={errors}
              errorColor="pry-100"
            />
            <Input
              title="Phone Number"
              textColor="pry-100"
              inputName="phoneNumber"
              placeholder="Enter your phone number"
              type="text"
              register={register}
              errors={errors}
              errorColor="pry-100"
            />
            <Input
              title="Email Address"
              textColor="pry-100"
              inputName="email"
              placeholder="Enter your email address"
              type="email"
              register={register}
              errors={errors}
              errorColor="pry-100"
            />
            <PrimaryButton
              name="Submit"
              isFetching={isFetching}
              bgColor="pry-100"
              textColor="pry-50"
              borderColor="pry-100"
              py="3"
              // click={handleClose}
            />
            <button
              className="text-pry-100 font-body hover:text-sec transition duration-300"
              onClick={handleClose}
            >
              Cancel
            </button>
          </form>
        </div>
      </Dialog>
    </div>
  );
};
export const PaymentDialog = ({ showModal, setShowModal }) => {
  const { appointments } = useSelector((state) => state.appointment);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlePaystackSuccessAction = (appointment) => {
    bookAppointment(dispatch, appointments);
    handleClose();
  };
  const handlePaystackCloseAction = () => {
    console.log("closed");
    handleClose();
  };
  const componentProps = {
    aapointment: appointments,
    reference: new Date().getTime().toString(),
    email: appointments?.email,
    amount: 200000,
    publicKey: "pk_test_dfe822981cc4a0d3d96f802f178d1ff62953e120",
    text: "Make Payment",
    onSuccess: (appointment) => handlePaystackSuccessAction(appointment),
    onClose: handlePaystackCloseAction,
  };

  const handleClose = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <Dialog open={showModal} onClose={handleClose}>
        <div className="flex flex-col justify-between gap-8 px-4 lg:px-8 py-6">
          <h1 className="text-lg font-body font-bold text-pry-100">
            Confirm appointment
          </h1>
          <p className="text-base font-body text-pry-100">
            Hi, {appointments.name} to confirm your appointment on{" "}
            {appointments.date} with a {appointments.specialty} consultant,
            click on the make payment button to pay with Paystack. Thank you
          </p>
          <PaystackButton
            {...componentProps}
            type="submit"
            onClick={handleClose}
            className="text-base bg-pry-100 py-3 text-pry-50 hover:text-pry-50 hover:bg-sec rounded-full flex justify-center w-full items-center  px-8 font-body transition duration-300"
          />
        </div>
      </Dialog>
    </div>
  );
};
export const UserPaymentDialog = ({ setShowModal }) => {
  const { appointments } = useSelector((state) => state.appointment);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { showModal } = useLocation();
  const handlePaystackSuccessAction = (appointment) => {
    bookAppointment(dispatch, appointments);
    handleClose();
  };
  const handlePaystackCloseAction = () => {
    console.log("closed");
    handleClose();
  };
  const componentProps = {
    aapointment: appointments,
    reference: new Date().getTime().toString(),
    email: appointments?.email,
    amount: 200000,
    publicKey: "pk_test_dfe822981cc4a0d3d96f802f178d1ff62953e120",
    text: "Make Payment",
    onSuccess: (appointment) => handlePaystackSuccessAction(appointment),
    onClose: handlePaystackCloseAction,
  };

  const handleClose = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <Dialog open={showModal} onClose={handleClose}>
        <div className="flex flex-col justify-between gap-8 px-4 lg:px-8 py-6">
          <h1 className="text-lg font-body font-bold text-pry-100">
            Confirm appointment
          </h1>
          <p className="text-base font-body text-pry-100">
            Hi, {appointments.name} to confirm your appointment on{" "}
            {appointments.date} with a {appointments.specialty} consultant,
            click on the make payment button to pay with Paystack. Thank you
          </p>
          <PaystackButton
            {...componentProps}
            type="submit"
            onClick={handleClose}
            className="text-base bg-pry-100 py-3 text-pry-50 hover:text-pry-50 hover:bg-sec rounded-full flex justify-center w-full items-center  px-8 font-body transition duration-300"
          />
        </div>
      </Dialog>
    </div>
  );
};
