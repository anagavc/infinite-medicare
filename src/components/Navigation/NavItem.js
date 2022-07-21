import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ name, id, path, click }) => {
  return (
    <NavLink
      to={path}
      key={id}
      onClick={click}
      className="md:mr-0 text-base  flex md:justify-between justify-center  md:border-0 w-full md:w-auto  md:space-x-12 items-center py-2 font-heading  text-pry-50  hover:text-sec border-b border-b-pry-50 md:border-bnone transition duration-500"
    >
      {name}
    </NavLink>
  );
};

export default NavItem;
