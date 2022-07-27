import PatientsGrid from "./PatientsGrid";
const PrescriptionDetails = () => {
  return (
    <div className="bg-pry-50 py-2 flex flex-col justify-between w-full">
      <h1 className="font-heading text-lg lg:text-2xl text-pry-100 mb-6">
        Prescription details
      </h1>
      <div className="flex flex-col  justify-between rounded drop-shadow p-4 lg:p-8 w-full bg-pry-50 gap-6">
        <div className="flex flex-col w-52 gap-2">
          <h3 className="text-pry-100 text-lg  font-body font-bold">Date</h3>
          <p className="text-pry-100 text-lg py-4 flex justify-center items-center px-6 font-body font-bold bg-pry-50 rounded drop-shadow">
            27/07/2022
          </p>
        </div>
        <div className="w-full">
          <PatientsGrid />
        </div>
      </div>
    </div>
  );
};

export default PrescriptionDetails;
