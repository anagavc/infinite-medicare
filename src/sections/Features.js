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
    <div className="bg-pry-100 flex flex-col space-y-12 px-24 w-full h-full py-32 ">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h3 className="font-heading text-2xl text-pry-50 font-bold uppercase">
          Our Features
        </h3>
        <p className="font-heading text-base text-pry-50 ">
          Here are some of the features that make us outstanding at Infinite
          Medicare
        </p>
      </div>
      <div className="w-full flex justify-between space-x-8 h-full mt-20">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="flex flex-col bg-pry-50 drop-shadow border border-sec mt-20  rounded-lg w-2/6  h-3/4 justify-center items-center px-8 py-8 space-y-4"
          >
            <div className="w-full -mt-24">
              <img
                src={feature.image}
                alt="Hero"
                className="w-full bg-pry-50 h-64 rounded-xl p-8 drop-shadow-lg"
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
