import Layout from "../components/Layouts/Layout";
import doctor from "../images/doctor.png";
import AppointmentsTable from "../components/Layouts/AppointmentsTable";
import { PrimaryButton, UserButton } from "../components/UI/Buttons";
import { UserActivity, UserInfo } from "../components/Layouts/UserData";
import { useEffect, useState } from "react";
import {
  Bloodtype,
  CalendarMonth,
  Email,
  MedicalInformation,
  MeetingRoom,
  Person,
  Phone,
} from "@mui/icons-material";
import {
  BookDialog,
  PasswordDialog,
  AccountDialog,
  UserPaymentDialog,
} from "../components/Layouts/Modal";
import { useSelector, useDispatch } from "react-redux";
import { getUserAppointments } from "../api/apiCalls";
const UserDashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const appointments = useSelector((state) => state.appointment.appointments);
  const userID = user._id;
  useEffect(() => {
    getUserAppointments(dispatch, userID);
  }, [dispatch]);
  return (
    <Layout>
      {modalType === "book" && (
        <BookDialog showModal={showModal} setShowModal={setShowModal} />
      )}
      {modalType === "password" && (
        <PasswordDialog showModal={showModal} setShowModal={setShowModal} />
      )}
      {modalType === "account" && (
        <AccountDialog showModal={showModal} setShowModal={setShowModal} />
      )}
      {modalType === "payment" && (
        <UserPaymentDialog showModal={showModal} setShowModal={setShowModal} />
      )}
      <div className="bg-pry-50 h-full px-8 lg:px-24 py-24 flex flex-col justify-between w-full">
        <h1 className="font-heading text-lg lg:text-2xl text-pry-100 mb-6">
          Patient's dashboard
        </h1>
        <div className="flex flex-col lg:flex-row justify-between rounded drop-shadow p-4 lg:p-8 w-full bg-pry-50 gap-6">
          <div className="flex flex-col  w-full  lg:w-2/6 gap-6">
            <div className="flex flex-col px-2 lg:px-12 py-8 rounded  drop-shadow justify-center items-center gap-4 bg-pry-50">
              <div className="rounded-full py-2 w-40 h-40 flex justify-center items-center bg-sec">
                <img
                  src={doctor}
                  className="w-3/5 h-4/5 bg-pry-100 p-4 rounded-full"
                  alt="patient"
                />
              </div>
              <UserInfo name={user.name} icon={<Person />} />
              <UserInfo
                name={user.phoneNumber || "+234-123-456-7890"}
                icon={<Phone />}
              />
              <UserInfo name={user.email} icon={<Email />} />
              <UserInfo name="B positive" icon={<Bloodtype />} />

              <PrimaryButton
                name="Edit account"
                bgColor="pry-100"
                textColor="pry-50"
                borderColor="pry-100"
                py="2 lg:py-4"
                click={() => {
                  setShowModal(!showModal);
                  setModalType("account");
                }}
              />
            </div>
            <div className="flex flex-col drop-shadow pt-4 px-12 justify-start items-start gap-4 pb-8 bg-pry-50">
              <UserButton name="Home" />
              <UserButton name="Appointments" />
              <UserButton name="Prescriptions" />
              <UserButton
                name="Change Password"
                click={() => {
                  setShowModal(!showModal);
                  setModalType("password");
                }}
              />
              <UserButton
                name="Book Appointment"
                click={() => {
                  setShowModal(!showModal);
                  setModalType("book");
                }}
              />
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
                count={appointments.length}
                name={appointments.length > 1 ? "Appointments" : "Appointment"}
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
                Appointments
              </h1>
              <AppointmentsTable appointments={appointments} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserDashboard;
