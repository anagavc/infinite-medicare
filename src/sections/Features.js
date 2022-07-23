import staff from "../images/staff.jpg";
import ambulance from "../images/ambulance.jpg";
import equipment from "../images/equipment.jpg";

const Features = () => {
  const features = [
    {
      name: "Exceptional Staff",
      image: staff,
      description:
        "We have an exceptional that staff that We have an exceptional tha  staff that We have an exceptional that staff that We have a exceptional that staff that We have an exceptional that staff that We have an exceptional that staff that",
    },
    {
      name: "Air Ambulance",
      image: ambulance,
      description:
        "We have an exceptional that staff that We have an exceptional tha  staff that We have an exceptional that staff that We have a exceptional that staff that We have an exceptional that staff that We have an exceptional that staff that",
    },
    {
      name: "Adequately equipped",
      image: equipment,
      description:
        "We have an exceptional that staff that We have an exceptional tha  staff that We have an exceptional that staff that We have a exceptional that staff that We have an exceptional that staff that We have an exceptional that staff that",
    },
  ];
  return (
    <div className="bg-pry-100 flex flex-col space-y-12 px-8 lg:px-24 w-full h-full py-24 ">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h3 className="text-sec text-3xl font-bold font-heading text-center">
          Features
        </h3>

        <p className="font-heading text-base text-pry-50 text-center ">
          Here are some of the features that make us outstanding
        </p>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-between gap-8 lg:space-x-8 h-full mt-20">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="flex flex-col bg-pry-50 drop-shadow border border-sec mt-20  rounded-lg w-full lg:w-2/6  h-3/4 justify-center items-center lg:p-8 p-6 space-y-4"
          >
            <div className="w-full -mt-24">
              <img
                src={feature.image}
                alt={feature.name}
                className="w-full bg-pry-50 h-2/5 lg:h-64 rounded-xl p-4 lg:p-6 drop-shadow-lg"
              />
            </div>

            <h3 className="font-heading text-2xl text-pry-100 font-bold ">
              {feature.name}
            </h3>
            <p className="font-body text-base text-pry-100 text-justify">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
