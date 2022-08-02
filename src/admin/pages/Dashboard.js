import { useState, useEffect, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { userRequest } from "../../api/requests";
import { Paragraph } from "../../components/UI/FontStyles";
import Chart from "../components/Chart";
import {
  LocalPostOffice,
  AddBox,
  AddShoppingCart,
  Comment,
} from "@mui/icons-material";

const Dashboard = () => {
  const [userStats, setUserStats] = useState([]);
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  const actions = [
    {
      title: "Manage patients",
      path: "../patients",
      icon: <AddBox />,
      style: "text-pry-100 hover:text-grey",
    },
    {
      title: "Add news item",
      path: "../addNews",
      icon: <AddShoppingCart />,
      style: "text-pry-100 hover:text-grey",
    },
    {
      title: "Manage appointments",
      path: "../appointments",
      icon: <Comment />,
      style: "text-pry-100 hover:text-grey",
    },
    {
      title: "Manage subscribers",
      path: "../subscribers",
      icon: <LocalPostOffice />,
      style: "text-pry-100 hover:text-grey",
    },
  ];
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active Users": item.total },
          ])
        );
      } catch (e) {
        console.log(e);
      }
    };
    getStats();
  }, [MONTHS]);

  return (
    <div className="flex flex-col w-full justify-between space-y-10 bg-pry-50">
      <Paragraph>Dashboard</Paragraph>

      <div className="flex justify-center items-center space-y-4 lg:space-y-0 lg:justify-between flex-col lg:flex-row lg:space-x-4">
        {actions.map((action, index) => (
          <NavLink
            key={index}
            to={action.path}
            className={`flex justify-center lg:space-x-2 rounded-sm ${action.style} font-body text-sm w-4/5 lg:w-full lg:px-4 hover:text-pry-200 items-center transtition duration-300 py-8 bg-pry-50 text-pry-100 drop-shadow `}
          >
            <span>{action.icon}</span>
            <p>{action.title}</p>
          </NavLink>
        ))}
      </div>
      <div className="flex  flex-col justify-start  lg:justify-between bg-pry-50 drop-shadow rounded">
        <Chart
          data={userStats}
          title="Patient Analytics"
          grid
          dataKey="Active Users"
        />
      </div>
    </div>
  );
};

export default Dashboard;
