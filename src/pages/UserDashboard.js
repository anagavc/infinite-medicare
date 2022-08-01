import Layout from "../components/Layouts/Layout";
import patient from "../images/reviewer1.png";
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
} from "../components/Layouts/Modal";
import { useSelector, useDispatch } from "react-redux";
import { getUserAppointments, getUserPrescriptions } from "../api/apiCalls";
import PrescriptionsTable from "../components/Layouts/PrescriptionsTable";
const UserDashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [dataType, setDataType] = useState("appointments");
  const appointments = useSelector((state) => state.appointment.appointments);
  const prescriptions = useSelector(
    (state) => state.prescription.prescriptions
  );

  const visited = appointments.map(
    (appointment) => appointment.status === "Has been consulted"
  );

  const userID = user._id;
  useEffect(() => {
    getUserAppointments(dispatch, userID);
    getUserPrescriptions(dispatch, userID);
  }, [dispatch, userID]);
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

      <div className="bg-pry-50 h-full px-8 lg:px-24 py-24 flex flex-col justify-between w-full">
        <h1 className="font-heading text-lg lg:text-2xl text-pry-100 mb-6">
          Patient's dashboard
        </h1>
        <div className="flex flex-col lg:flex-row justify-between rounded drop-shadow p-4 lg:p-8 w-full bg-pry-50 gap-6">
          <div className="flex flex-col  w-full  lg:w-2/6 gap-6">
            <div className="flex flex-col px-2 lg:px-12 py-8 rounded  drop-shadow justify-center items-center gap-4 bg-pry-50">
              <div className="rounded-full p-6 w-40 h-40 flex justify-center items-center bg-sec">
                <img
                  src={user.img ? user.img : patient}
                  className="w-full h-full bg-pry-100 py-4 rounded-full flex justify-center items-center"
                  alt={user.name}
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
              <UserButton
                name="Appointments"
                click={() => {
                  setDataType("appointments");
                }}
              />
              <UserButton
                name="Prescriptions"
                click={() => {
                  setDataType("prescriptions");
                }}
              />
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
                count={visited.length}
                name={visited.length > 1 ? "Total Visits" : "Visitation"}
                icon={<MeetingRoom />}
              />

              <UserActivity
                count={appointments?.length}
                name={appointments?.length > 1 ? "Appointments" : "Appointment"}
                icon={<CalendarMonth />}
              />

              <UserActivity
                count={prescriptions?.length}
                name={
                  prescriptions?.length > 1 ? "Prescriptions" : "Prescription"
                }
                icon={<MedicalInformation />}
              />
            </div>
            {dataType === "appointments" ? (
              <div className="w-full">
                <h1 className="font-heading text-lg lg:text-xl text-pry-100 mb-6 font-bold">
                  Your appointments
                </h1>
                <AppointmentsTable appointments={appointments} />
              </div>
            ) : (
              <div className="w-full flex flex-col justify-between gap-2">
                <h1 className="font-heading text-lg lg:text-xl text-pry-100 font-bold">
                  Your prescriptions
                </h1>

                <PrescriptionsTable prescriptions={prescriptions} />
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserDashboard;
