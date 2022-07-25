import { Email, Person, Phone } from "@mui/icons-material";
import { PrimaryButton } from "../components/UI/Buttons";
import Layout from "../components/Layouts/Layout";
import doctor from "../images/doctor.png";
const UserDashboard = () => {
  return (
    <Layout>
      <div className="bg-pry-50 h-full px-24 py-24 flex flex-col justify-between w-full">
        <h1 className="font-heading text-2xl text-pry-100 mb-6">
          Patient's dashboard
        </h1>
        <div className="flex justify-between rounded drop-shadow p-8 w-full bg-pry-50">
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
            <div className="flex flex-col drop-shadow py-8 px-12 justify-center items-center gap-8 bg-pry-50">
              <button className="text-pry-100 hover:text-sec font-body text-base transition duration-300 border-b border-b-pry-100 w-full">
                Home
              </button>
              <button className="text-pry-100 hover:text-sec font-body text-base transition duration-300 border-b border-b-pry-100 w-full">
                Book appointment
              </button>
              <button className="text-pry-100 hover:text-sec font-body text-base transition duration-300 border-b border-b-pry-100 w-full">
                Appointments
              </button>
              <button className="text-pry-100 hover:text-sec font-body text-base transition duration-300 border-b border-b-pry-100 w-full">
                Encounters
              </button>
              <button className="text-pry-100 hover:text-sec font-body text-base transition duration-300 border-b border-b-pry-100 w-full">
                Prescriptions
              </button>
              <button className="text-pry-100 hover:text-sec font-body text-base transition duration-300 border-b border-b-pry-100 w-full">
                Change password
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserDashboard;
