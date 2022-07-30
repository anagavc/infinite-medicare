import Input from "../UI/Input";
import Dialog from "@mui/material/Dialog";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  bookAppointment,
  createPrescription,
  deletePatient,
  deletePrescription,
  makeAppointment,
  updateAppointment,
  updatePrescription,
  updateUserInfo,
  updateUserInfoByAdmin,
  updateUserPassword,
} from "../../api/apiCalls";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import { PaystackButton } from "react-paystack";
import { PrimaryButton } from "../UI/Buttons";
//modal for booking appointments
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
//modal for updating user's password
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
    setShowModal(false);
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

//modal for the user to update their account
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
    updateUserInfo(userID, data, dispatch);
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
              There was an error in updating your account
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
//Modal for unregistered users to book and make payments
export const PaymentDialog = ({ showModal, setShowModal }) => {
  const { appointments } = useSelector((state) => state.appointment);
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

//modal for the admin to update a patient's account
export const AdminUpdateAccountDialog = ({
  showModal,
  setShowModal,
  userID,
}) => {
  const { error, isFetching } = useSelector((state) => state.user);

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
    updateUserInfoByAdmin(userID, data, dispatch, navigate);
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
              There was an error in updating your account
            </p>
          )}
          <form
            className="flex flex-col  h-full w-full gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              title="Date of Birth"
              textColor="pry-100"
              inputName="dob"
              placeholder="Enter user's date of birth"
              type="date"
              register={register}
              errors={errors}
              errorColor="pry-100"
            />
            <Input
              title="Blood Group"
              textColor="pry-100"
              inputName="bloodGroup"
              placeholder="Enter user's blood group"
              type="select"
              options={["O+", "O-", "A+", "A-", "B-", "B+", "AB+", "AB-"]}
              register={register}
              errors={errors}
              errorColor="pry-100"
            />
            <Input
              title="Gender"
              textColor="pry-100"
              inputName="gender"
              placeholder="Enter user's blood group"
              type="select"
              options={["Male", "Female"]}
              register={register}
              errors={errors}
              errorColor="pry-100"
            />

            <Input
              title="Address"
              textColor="pry-100"
              inputName="address"
              placeholder="Enter user's address"
              type="text"
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

//Modal for deletion of patients
export const DeletePatientDialog = ({
  userID,
  user,
  showModal,
  setShowModal,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClose = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <Dialog open={showModal} onClose={handleClose}>
        <div className="flex flex-col justify-between gap-8 px-4 lg:px-8 py-6">
          <h1 className="text-lg font-body font-bold text-pry-100">
            Confirm deletion
          </h1>
          <p className="text-base font-body text-pry-100">
            Do you want to delete {user.name} from the database? This is an
            irreversible action.
          </p>
          <PrimaryButton
            name="Yes, I am certain"
            bgColor="red-500"
            textColor="pry-50"
            borderColor="pry-100"
            py="2 lg:py-4"
            click={() => {
              deletePatient(dispatch, userID, navigate);
              handleClose();
            }}
          />
          <button
            className="text-pry-100 font-body hover:text-sec transition duration-300"
            onClick={handleClose}
          >
            Cancel
          </button>
        </div>
      </Dialog>
    </div>
  );
};

//modal for the admin to update a patient's appointment report
export const UpdateAppointmentDialog = ({
  showModal,
  setShowModal,
  appointmentId,
}) => {
  const { error, isFetching } = useSelector((state) => state.appointment);

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
    updateAppointment(appointmentId, data, dispatch, navigate);
    reset();
    setShowModal(false);
  };
  return (
    <div>
      <Dialog open={showModal} onClose={handleClose}>
        <div className="flex flex-col justify-between gap-4 px-4 lg:px-8 py-6">
          <h1 className="text-lg font-body font-bold text-pry-100">
            Consultation report
          </h1>
          <p className="text-base font-body text-pry-100">
            Leave a report about your findings during the consultation with the
            Patient
          </p>
          {error && (
            <p className="text-pry-100 font-normal text-base font-body">
              There was an error in leaving a report
            </p>
          )}
          <form
            className="flex flex-col  h-full w-full gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              title="Report"
              textColor="pry-100"
              inputName="report"
              placeholder="Enter your report"
              type="text"
              register={register}
              errors={errors}
              errorColor="pry-100"
            />

            <PrimaryButton
              name="Submit"
              // isFetching={isFetching}
              bgColor="pry-100"
              textColor="pry-50"
              borderColor="pry-100"
              py="3"
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
//modal for the admin to give a prescription to a patient
export const AddPrescriptionDialog = ({ showModal, setShowModal, patient }) => {
  const { error, isFetching } = useSelector((state) => state.prescription);
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
    createPrescription(dispatch, {
      patientName: patient.name,
      patientId: patient._id,
      email: patient.email,
      ...data,
    });
    reset();
    setShowModal(false);
  };
  return (
    <div>
      <Dialog open={showModal} onClose={handleClose}>
        <div className="flex flex-col justify-between gap-4 px-4 lg:px-8 py-6">
          <h1 className="text-lg font-body font-bold text-pry-100">
            Give prescription
          </h1>
          <p className="text-base font-body text-pry-100">
            Give a prescription of drugs for the patient to folllow
          </p>
          {error && (
            <p className="text-pry-100 font-normal text-base font-body">
              There was an error in giving a prescription
            </p>
          )}
          <form
            className="flex flex-col  h-full w-full gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              title="Date to commence medication"
              textColor="pry-100"
              inputName="date"
              placeholder="Select date to begin medication"
              type="date"
              register={register}
              errors={errors}
              errorColor="pry-100"
            />
            <Input
              title="Drugs"
              textColor="pry-100"
              inputName="drug"
              placeholder="Prescribe drugs"
              type="text"
              register={register}
              errors={errors}
              errorColor="pry-100"
            />

            <PrimaryButton
              name="Submit"
              // isFetching={isFetching}
              bgColor="pry-100"
              textColor="pry-50"
              borderColor="pry-100"
              py="3"
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

//modal for the admin to update a patient's prescription
export const UpdatePrescriptionDialog = ({
  showModal,
  setShowModal,
  prescriptionId,
}) => {
  const { error, isFetching } = useSelector((state) => state.prescription);

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
    updatePrescription(prescriptionId, data, dispatch, navigate);
    reset();
    setShowModal(false);
  };
  return (
    <div>
      <Dialog open={showModal} onClose={handleClose}>
        <div className="flex flex-col justify-between gap-4 px-4 lg:px-8 py-6">
          <h1 className="text-lg font-body font-bold text-pry-100">
            Update prescription
          </h1>
          <p className="text-base font-body text-pry-100">
            Make changes on the drug prescriptions issued to the patient
          </p>
          {error && (
            <p className="text-pry-100 font-normal text-base font-body">
              There was an error in updating the prescription
            </p>
          )}
          <form
            className="flex flex-col  h-full w-full gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              title="Prescription"
              textColor="pry-100"
              inputName="drug"
              placeholder="Enter the updated prescription"
              type="text"
              register={register}
              errors={errors}
              errorColor="pry-100"
            />

            <PrimaryButton
              name="Submit"
              // isFetching={isFetching}
              bgColor="pry-100"
              textColor="pry-50"
              borderColor="pry-100"
              py="3"
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

//Modal for deltetion of a prescription
export const DeletePrescriptionDialog = ({
  prescriptionId,
  showModal,
  setShowModal,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClose = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <Dialog open={showModal} onClose={handleClose}>
        <div className="flex flex-col justify-between gap-8 px-4 lg:px-8 py-6">
          <h1 className="text-lg font-body font-bold text-pry-100">
            Confirm deletion
          </h1>
          <p className="text-base font-body text-pry-100">
            Do you want to delete this prescription from the database ? This is
            an irreversible action.
          </p>
          <PrimaryButton
            name="Yes, I am certain"
            bgColor="red-500"
            textColor="pry-50"
            borderColor="pry-100"
            py="2 lg:py-4"
            click={() => {
              deletePrescription(dispatch, prescriptionId, navigate);
              handleClose();
            }}
          />
          <button
            className="text-pry-100 font-body hover:text-sec transition duration-300"
            onClick={handleClose}
          >
            Cancel
          </button>
        </div>
      </Dialog>
    </div>
  );
};
