import { DocumentScanner, LocalHospital, PersonAdd } from "@mui/icons-material";
import { FadeUpAnimation } from "../components/UI/Animations";

const GetStarted = () => {
  const procedures = [
    {
      name: "Register an account",
      icon: <PersonAdd />,
      description:
        "Register your account by clicking on the register button, fill in your details and you will be logged in.",
    },
    {
      name: "Get assigned to a Doctor",
      icon: <DocumentScanner />,
      description:
        " After registration, you will be assigned to a doctor with the least patients.",
    },
    {
      name: "Visit the Hospital",
      icon: <LocalHospital />,
      description:
        "   Visit the hospital and you will get attended to by your assigned Doctor",
    },
  ];
  return (
    <div className="bg-pry-50 flex flex-col space-y-12 px-8 lg:px-24 w-full h-full py-32 ">
      <FadeUpAnimation className="flex flex-col gap-2 justify-center items-center">
        <h3 className="text-pry-100 text-3xl font-bold font-heading text-center">
          Get Started
        </h3>

        <p className="font-heading text-base text-pry-100 ">
          These are the steps on getting started
        </p>
      </FadeUpAnimation>
      <FadeUpAnimation className="w-full flex flex-col lg:flex-row justify-between gap-6 lg:space-x-8">
        {procedures.map((procedure) => (
          <div
            className="w-full lg:w-2/6 rounded lg:rounded-lg flex-col bg-pry-100 px-6 py-8 lg:px-8 space-y-4"
            key={procedure.name}
          >
            <div className="rounded-full bg-pry-50 text-pry-100 p-2 flex justify-center items-center w-20">
              {procedure.icon}
            </div>
            <h6 className="font-heading text-2xl text-pry-50 font-bold">
              {procedure.name}
            </h6>
            <p className="font-body text-base text-pry-50 text-justify ">
              {procedure.description}
            </p>
          </div>
        ))}
      </FadeUpAnimation>
    </div>
  );
};

export default GetStarted;
