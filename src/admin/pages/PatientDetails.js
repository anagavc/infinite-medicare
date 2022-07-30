import doctor from "../../images/doctor.png";
import { PrimaryButton, UserButton } from "../../components/UI/Buttons";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllPrescriptions,
  getUser,
  getUserAppointments,
  getUserPrescriptions,
} from "../../api/apiCalls";
import { useLocation } from "react-router-dom";
import { UserActivity, UserInfo } from "../../components/Layouts/UserData";
import {
  AddPhotoAlternateTwoTone,
  Bloodtype,
  Cake,
  CalendarMonth,
  Email,
  Female,
  LocationCity,
  Male,
  MedicalInformation,
  MeetingRoom,
  Person,
  Phone,
} from "@mui/icons-material";
import { useState, useEffect } from "react";
import {
  AddPrescriptionDialog,
  AdminUpdateAccountDialog,
  DeletePatientDialog,
} from "../../components/Layouts/Modal";
import PrescriptionsTable from "../../components/Layouts/PrescriptionsTable";
import AppointmentsTable from "../../components/Layouts/AppointmentsTable";
const UserDashboard = () => {
  const location = useLocation();
  const userID = location.pathname.split("/")[3];
  const user = useSelector((state) => state.patient.patients);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  useEffect(() => {
    getUser(dispatch, userID);
    getUserAppointments(dispatch, userID);
  }, [dispatch]);
  useEffect(() => {
    getAllPrescriptions(dispatch);
  }, [dispatch]);
  const appointments = useSelector((state) => state.appointment.appointments);
  const prescriptions = useSelector(
    (state) => state.prescription.prescriptions
  );
  return (
    <>
      {modalType === "update" && (
        <AdminUpdateAccountDialog
          userID={userID}
          user={user}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
      {modalType === "prescribe" && (
        <AddPrescriptionDialog
          userID={userID}
          patient={user}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
      {modalType === "delete" && (
        <DeletePatientDialog
          userID={userID}
          user={user}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
      <div className="bg-pry-50 py-2 flex flex-col justify-between w-full">
        <h1 className="font-heading text-lg lg:text-2xl text-pry-100 mb-6">
          Patient's details
        </h1>
        <div className="flex flex-col lg:flex-row justify-between rounded drop-shadow p-4 lg:p-8 w-full bg-pry-50 gap-6">
          <div className="flex flex-col w-full  lg:w-2/6 gap-6">
            <div className="flex flex-col px-2 lg:px-6 py-8 rounded items-center  drop-shadow justify-between gap-4 bg-pry-50">
              <div className="rounded-full py-2 w-40 h-40 flex justify-center mx-auto items-center bg-sec">
                <img
                  src={doctor}
                  className="w-3/5 h-4/5 bg-pry-100 p-4 rounded-full"
                  alt="patient"
                />
              </div>
              <UserInfo
                name={user.bloodGroup || "Not yet specified"}
                icon={<Bloodtype />}
              />
              <UserInfo
                name={user.gender || "Not yet specified"}
                icon={user.gender === "female" ? <Female /> : <Male />}
              />
              <UserInfo name={user.name} icon={<Person />} />
              <UserInfo name={user.dob || "Not yet added"} icon={<Cake />} />

              <UserInfo
                name={user.phoneNumber || "+234-123-456-7890"}
                icon={<Phone />}
              />
              <UserInfo name={user.email} icon={<Email />} />

              <UserInfo
                name={user.address || "Not yet added"}
                icon={<LocationCity />}
              />
              <PrimaryButton
                name="Edit Account"
                bgColor="pry-100"
                textColor="pry-50"
                borderColor="pry-100"
                py="2 lg:py-4"
                click={() => {
                  setShowModal(!showModal);
                  setModalType("update");
                }}
              />

              <PrimaryButton
                name="Delete account"
                bgColor="red-500"
                textColor="pry-50"
                borderColor="pry-100"
                py="2 lg:py-4"
                click={() => {
                  setShowModal(!showModal);
                  setModalType("delete");
                }}
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
                count={appointments?.length}
                name={appointments?.length > 1 ? "Appointments" : "Appointment"}
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
              <PrimaryButton
                name="Give prescription"
                bgColor="pry-100"
                textColor="pry-50"
                borderColor="pry-100"
                py="2 lg:py-4"
                click={() => {
                  setShowModal(!showModal);
                  setModalType("prescribe");
                }}
              />
              <PrescriptionsTable prescriptions={prescriptions} />

              {/* <AppointmentsTable appointments={appointments} /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
