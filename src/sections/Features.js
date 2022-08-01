import staff from "../images/staff.jpg";
import ambulance from "../images/ambulance.jpg";
import equipment from "../images/equipment.jpg";
import { FadeUpAnimation } from "../components/UI/Animations";

const Features = () => {
  const features = [
    {
      name: "Exceptional Staff",
      image: staff,
      description:
        "We have an exceptional retinue of staff that are well trained in the medical profession with years of dedicated and dilligent service to ensure that your healthcare needs are met with the highest standards of service.",
    },
    {
      name: "Air Ambulance",
      image: ambulance,
      description:
        "We provide air ambulance services with an inflight medical personnel to aid patients that are in dire need of emergeny medical services to access the neccessary first adi treatments before getting to the hospital.",
    },
    {
      name: "Adequately equipped",
      image: equipment,
      description:
        "Our facility is well equipped with state-of-the-art medical equipment to ensure that you are well taken care of and you gain back an optimal level of health while in our facility. The equipments are well manned by technicians who are highly trained.",
    },
  ];
  return (
    <div className="bg-pry-100 flex flex-col space-y-12 px-8 lg:px-24 w-full h-full py-24 ">
      <FadeUpAnimation className="flex flex-col gap-2 justify-center items-center">
        <h3 className="text-sec text-3xl font-bold font-heading text-center">
          Features
        </h3>

        <p className="font-heading text-base text-pry-50 text-center ">
          Here are some of the features that make us outstanding
        </p>
      </FadeUpAnimation>
      <FadeUpAnimation className="w-full flex flex-col lg:flex-row justify-between gap-8  h-full mt-20">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="flex flex-col bg-pry-50 drop-shadow border border-sec mt-20  rounded-lg w-full lg:w-3/6  h-3/4 justify-center items-center lg:p-8 p-6 space-y-2"
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
      </FadeUpAnimation>
    </div>
  );
};

export default Features;
