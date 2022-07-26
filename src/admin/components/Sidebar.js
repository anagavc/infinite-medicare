import { NavLink, useNavigate } from "react-router-dom";
import { DashboardIcon } from "./Icons";
import { logout } from "../../api/apiCalls";
import { useDispatch } from "react-redux";

import {
  Logout,
  Inventory,
  Comment,
  AddShoppingCart,
  LocalPostOffice,
  LocalHospital,
  MedicalInformation,
} from "@mui/icons-material";
const Sidebar = ({ isOpen, setIsOpen }) => {
  const navElements = [
    {
      title: "Dashboard",
      path: "dashboard",
      icon: <DashboardIcon />,
    },
    {
      title: "Patients",
      path: "patients",
      icon: <Inventory />,
    },
    {
      title: "Appointments",
      path: "appointments",
      icon: <AddShoppingCart />,
    },
    {
      title: "Prescriptions",
      path: "prescriptions",
      icon: <MedicalInformation />,
    },
    {
      title: "Blog",
      path: "blog",
      icon: <Comment />,
    },
    {
      title: "Subscribers",
      path: "subscribers",
      icon: <LocalPostOffice />,
    },
  ];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    logout(dispatch, navigate);
  };
  return (
    <aside
      className={`${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } absolute inset-0 transition-all duration-500 ease-in-out z-50 lg:translate-x-0 shadow-sm lg:relative lg:flex flex-col lg:w-[316px] w-72 overflow-y-auto space-y-8 py-2 bg-pry-100`}
    >
      <button
        onClick={() => setIsOpen(false)}
        className="text-pry-50 lg:hidden absolute right-4 top-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className="flex items-center justify-center">
        <NavLink to="/">
          <span className="text-xl font-bold cursor-pointer text-pry-50 gap-2 font-heading justify-center hover:text-sec transition duration-300  flex items-center">
            <LocalHospital />
            Infinite Medicare
          </span>
        </NavLink>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col space-y-4 ">
          <p className="text-pry-50 text-base font-body font-bold px-8">Menu</p>
          {navElements.map((element, index) => (
            <NavLink
              to={element.path}
              key={index}
              className={(navData) =>
                navData.isActive
                  ? "text-pry-100 bg-sec rounded-r-full inline-flex  items-center space-x-4 py-4 px-8  mr-8 "
                  : "text-pry-50 inline-flex  items-center space-x-4 py-4 px-8  hover:text-pry-100 rounded-r-full mr-8 hover:bg-sec  transition duration-300 "
              }
            >
              <span>{element.icon}</span>
              <p>{element.title}</p>
            </NavLink>
          ))}
          <button
            onClick={logoutHandler}
            className="text-pry-50  flex  items-center space-x-4 py-4 px-8   hover:text-pry-100 rounded-r-full mr-8 hover:bg-sec transition duration-300 "
          >
            <Logout />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
