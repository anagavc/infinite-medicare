import { FacebookRounded, LinkedIn, Twitter } from "@mui/icons-material";
import gynaecology from "../images/gynaecology.png";
import dermatologist from "../images/dermatologist.png";
import urology from "../images/urology.png";
import { PrimaryButton } from "../components/UI/Buttons";
import { NavLink } from "react-router-dom";
const Staff = () => {
  const consultants = [
    {
      img: gynaecology,
      name: "Dr.Vicky Sanders",
      title: "Chief Gynaecologist",
      description:
        " Dr. Vicky completed her training in Lisbon Portugal while specializing in Gynaecology, with over twenty years of experience she has been exceptional when it comes to childbirth delivery related cases.",
      socials: [
        "https://facebook.com",
        "https://linkedin.com",
        "https://twitter.com",
      ],
    },
    {
      img: dermatologist,
      title: "Chief Dermatologist",
      name: "Dr.Fred Simpson",
      description:
        " Dr. Fred completed his training at John Hopkins Medical University while specializing in Gynaecology, with over twenty years of experience he has been exceptional when it comes to dermatological issues.",
      socials: [
        "https://facebook.com",
        "https://linkedin.com",
        "https://twitter.com",
      ],
    },
    {
      img: urology,
      title: "Chief Urologist",
      name: "Dr.Gary Gunther",
      description:
        " Dr. Gary completed his training in Lisbon Portugal while specializing in Gynaecology, with over twenty years of experience he has been exceptional when it comes to  urology related problems.",
      socials: [
        "https://facebook.com",
        "https://linkedin.com",
        "https://twitter.com",
      ],
    },
  ];
  return (
    <div className="bg-pry-50 flex flex-col space-y-12 px-24 w-full h-full py-20 ">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h3 className="text-pry-100 text-3xl font-bold font-heading text-center">
          Our Consultants
        </h3>

        <p className="font-heading text-base text-pry-100 ">
          Here are our Lead Consultants
        </p>
      </div>
      <div className="w-full flex justify-between space-x-8 h-full">
        {consultants.map((consultant) => (
          <div
            className="flex flex-col bg-pry-100 w-2/6 p-8 rounded space-y-4"
            key={consultant.name}
          >
            <div className="bg-sec relative flex flex-col rounded justify-center items-center mb-4">
              <img src={consultant.img} alt={consultant.name} />
              <div className="rounded-full bg-pry-100 drop-shadow flex items-center w-4/5 justify-center absolute top-full -mt-6 border border-sec mx-auto py-2 px-4">
                <p className="text-sec font-body font-bold text-base">
                  {consultant.title}
                </p>
              </div>
            </div>
            <h6 className="font-heading text-lg text-sec font-bold uppercase mt-24">
              {consultant.name}
            </h6>
            <p className="font-heading text-justify text-base text-pry-50 ">
              {consultant.description}
            </p>
            <div className="w-full flex justify-between">
              <div className="flex w-3/5  space-x-2">
                <NavLink
                  to={consultant.socials[0]}
                  className="text-pry-100 bg-sec rounded-full  hover:text-pry-200 transition duration-300 p-2 flex justify-center items-center"
                >
                  <FacebookRounded />
                </NavLink>
                <NavLink
                  to={consultant.socials[1]}
                  className="text-pry-100 bg-sec rounded-full  hover:text-pry-200 transition duration-300 p-2 flex justify-center items-center"
                >
                  <LinkedIn />
                </NavLink>
                <NavLink
                  to={consultant.socials[2]}
                  className="text-pry-100 bg-sec rounded-full  hover:text-pry-200 transition duration-300 p-2 flex justify-center items-center"
                >
                  <Twitter />
                </NavLink>
              </div>
              <div className="w-2/5">
                <PrimaryButton
                  name="Book"
                  path="book"
                  bgColor="sec"
                  textColor="pry-100"
                  borderColor="pry-100"
                  py="2"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Staff;
