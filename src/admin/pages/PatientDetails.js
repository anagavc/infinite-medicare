import doctor from "../../images/doctor.png";
import { PrimaryButton, UserButton } from "../../components/UI/Buttons";
import { UserActivity, UserInfo } from "../../components/Layouts/UserData";
import {
  Bloodtype,
  CalendarMonth,
  Email,
  MedicalInformation,
  MeetingRoom,
  Person,
  Phone,
} from "@mui/icons-material";
import { useState } from "react";
import {
  BookDialog,
  PasswordDialog,
  AccountDialog,
} from "../../components/Layouts/Modal";
import PatientsGrid from "./PatientsGrid";
const UserDashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  return (
    <>
      {modalType === "book" && (
        <BookDialog showModal={showModal} setShowModal={setShowModal} />
      )}
      {modalType === "password" && (
        <PasswordDialog showModal={showModal} setShowModal={setShowModal} />
      )}
      {modalType === "account" && (
        <AccountDialog showModal={showModal} setShowModal={setShowModal} />
      )}
      <div className="bg-pry-50 py-2 flex flex-col justify-between w-full">
        <h1 className="font-heading text-lg lg:text-2xl text-pry-100 mb-6">
          Patient's details
        </h1>
        <div className="flex flex-col lg:flex-row justify-between rounded drop-shadow p-4 lg:p-8 w-full bg-pry-50 gap-6">
          <div className="flex flex-col w-full  lg:w-2/6 gap-6">
            <div className="flex flex-col px-2 lg:px-6 py-8 rounded  drop-shadow justify-center items-center gap-4 bg-pry-50">
              <div className="rounded-full py-2 w-40 h-40 flex justify-center items-center bg-sec">
                <img
                  src={doctor}
                  className="w-3/5 h-4/5 bg-pry-100 p-4 rounded-full"
                  alt="patient"
                />
              </div>
              <UserInfo name="Hospital Patient" icon={<Person />} />
              <UserInfo name="+234-812-345-6789" icon={<Phone />} />
              <UserInfo name="hospitalpatient@gmail.com" icon={<Email />} />
              <UserInfo name="B positive" icon={<Bloodtype />} />

              <PrimaryButton
                name="Upgrade to doctor"
                bgColor="pry-100"
                textColor="pry-50"
                borderColor="pry-100"
                py="2 lg:py-4"
                click={() => {
                  setShowModal(!showModal);
                  setModalType("account");
                }}
              />

              <PrimaryButton
                name="Delete account"
                bgColor="red-500"
                textColor="pry-50"
                borderColor="pry-100"
                py="2 lg:py-4"
              />
            </div>
            <div className="flex flex-col drop-shadow pt-4 px-12 justify-start items-start gap-4 pb-8 bg-pry-50">
              <UserButton name="Encounters" />
              <UserButton name="Appointments" />
              <UserButton name="Prescriptions" />
            </div>
          </div>

          <div className="flex w-full lg:w-4/6  flex-col  gap-8">
            <div className="flex flex-col lg:flex-row justify-between w-full gap-4">
              <UserActivity
                count="0"
                name="Total Visits"
                icon={<MeetingRoom />}
              />

              <UserActivity
                count="0"
                name="Appointment"
                icon={<CalendarMonth />}
              />

              <UserActivity
                count="0"
                name="Prescriptions"
                icon={<MedicalInformation />}
              />
            </div>
            <div className="w-full">
              <h1 className="font-heading text-lg lg:text-xl text-pry-100 mb-6 font-bold">
                Encounters
              </h1>
              <PatientsGrid />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
