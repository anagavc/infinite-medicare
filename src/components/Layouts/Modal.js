import Input from "../UI/Input";
import Dialog from "@mui/material/Dialog";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { updateUserInfo } from "../../api/apiCalls";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { PrimaryButton } from "../UI/Buttons";
export const BookDialog = ({ showModal, setShowModal }) => {
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
      reset();
      //   toast.success(`Your request has been sent,we will get back to you soon.`);
    } catch (error) {
      console.log(error);
      setisFetching(false);
    }
  };
  const handleClose = () => {
    setShowModal(!showModal);
  };
  return (
    <div>
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
            />
            <Input
              title="Date"
              textColor="pry-100"
              inputName="date"
              type="date"
              register={register}
              errors={errors}
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
    </div>
  );
};
export const PasswordDialog = ({ showModal, setShowModal }) => {
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
      reset();
      //   toast.success(`Your request has been sent,we will get back to you soon.`);
    } catch (error) {
      console.log(error);
      setisFetching(false);
    }
  };
  const handleClose = () => {
    setShowModal(!showModal);
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
            />
            <Input
              title="New Password"
              textColor="pry-100"
              inputName="newPassword"
              placeholder="Enter your new password"
              type="password"
              register={register}
              errors={errors}
            />
            <PrimaryButton
              name="Submit"
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
  const onSubmit = async (data) => {
    updateUserInfo(userID, data, dispatch, navigate);
    reset();
  };
  const handleClose = () => {
    setShowModal(!showModal);
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
            <p className="text-pry-100 font-normal text-base px-6 font-body">
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
            />
            <Input
              title="Phone Number"
              textColor="pry-100"
              inputName="phoneNumber"
              placeholder="Enter your phone number"
              type="text"
              register={register}
              errors={errors}
            />
            <Input
              title="Email Address"
              textColor="pry-100"
              inputName="email"
              placeholder="Enter your email address"
              type="email"
              register={register}
              errors={errors}
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
