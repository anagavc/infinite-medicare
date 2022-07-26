import Input from "../UI/Input";
import Dialog from "@mui/material/Dialog";
import { useForm } from "react-hook-form";
import { useState } from "react";
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
