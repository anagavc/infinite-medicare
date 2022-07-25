import {
  CalendarMonth,
  Email,
  KeyboardArrowRight,
  MedicalInformation,
  MeetingRoom,
  Person,
  Phone,
} from "@mui/icons-material";
import { PrimaryButton, UserButton } from "../components/UI/Buttons";
import Layout from "../components/Layouts/Layout";
import doctor from "../images/doctor.png";
import { Table } from "@mui/material";
import CustomizedTables from "../components/Layouts/Table";
const UserDashboard = () => {
  return (
    <Layout>
      <div className="bg-pry-50 h-full px-24 py-24 flex flex-col justify-between w-full">
        <h1 className="font-heading text-2xl text-pry-100 mb-6">
          Patient's dashboard
        </h1>
        <div className="flex justify-between rounded drop-shadow p-8 w-full bg-pry-50 gap-6">
          <div className="flex flex-col justify-between w-2/6 gap-6">
            <div className="flex flex-col px-12 py-8 rounded  drop-shadow justify-center items-center gap-4 bg-pry-50">
              <div className="rounded-full py-2 w-40 h-40 flex justify-center items-center bg-sec">
                <img
                  src={doctor}
                  className="w-3/5 h-4/5 bg-pry-100 p-4 rounded-full"
                  alt="patient"
                />
              </div>
              <div className="flex  justify-between gap-2 text-pry-100">
                <Person />
                <p className="font-body text-base  text-pry-100 ">
                  Hospital Patient
                </p>
              </div>
              <div className="flex  justify-between gap-2 text-pry-100">
                <Phone />
                <p className="font-body text-base text-pry-100 ">
                  +234-812-345-6789
                </p>
              </div>
              <div className="flex  justify-between gap-2 text-pry-100">
                <Email />
                <p className="font-body text-base text-pry-100 ">
                  hospitalpatient@gmail.com
                </p>
              </div>
              <PrimaryButton
                name="Edit account"
                bgColor="pry-100"
                textColor="pry-50"
                borderColor="pry-100"
                py="4"
              />
            </div>
            <div className="flex flex-col drop-shadow py-8 px-12 justify-start items-start gap-8 bg-pry-50">
              <UserButton name="Home" />
              <UserButton name="Encounters" />
              <UserButton name="Appointments" />
              <UserButton name="Prescriptions" />
              <UserButton name="Change Password" />
              <UserButton name="Book Appointment" />
            </div>
          </div>

          <div className="flex w-4/6  flex-col justify-between gap-6">
            <div className="flex justify-between w-full gap-4">
              <div className="flex justify-between bg-pry-50 p-6 rounded drop-shadow w-2/6 ">
                <div className="flex flex-col gap-2 w-3/5">
                  <h4 className="text-xl font-body text-pry-100 font-bold">
                    0
                  </h4>
                  <p className="font-body text-base text-pry-100 ">
                    Total Visits
                  </p>
                </div>
                <div className="bg-pry-100 p-4 rounded text-pry-50 flex items-center justify-center">
                  <MeetingRoom />
                </div>
              </div>
              <div className="flex justify-between bg-pry-50 p-6 rounded drop-shadow w-2/6 ">
                <div className="flex flex-col gap-2 w-3/5">
                  <h4 className="text-xl font-body text-pry-100 font-bold">
                    0
                  </h4>
                  <p className="font-body text-base text-pry-100 ">
                    Appointment
                  </p>
                </div>
                <div className="bg-pry-100 p-4 rounded text-pry-50 flex items-center justify-center">
                  <CalendarMonth />
                </div>
              </div>
              <div className="flex justify-between bg-pry-50 p-6 rounded drop-shadow w-2/6 ">
                <div className="flex flex-col gap-2 w-3/5">
                  <h4 className="text-xl font-body text-pry-100 font-bold">
                    0
                  </h4>
                  <p className="font-body text-base text-pry-100 ">
                    Prescriptions
                  </p>
                </div>
                <div className="bg-pry-100 p-4 rounded text-pry-50 flex items-center justify-center">
                  <MedicalInformation />
                </div>
              </div>
            </div>
            <div className="w-full">
              <CustomizedTables />
            </div>
            <Table />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserDashboard;
