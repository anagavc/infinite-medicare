import { NavLink, Link } from "react-router-dom";
import React from "react";
import { KeyboardArrowRight } from "@mui/icons-material";
import ClipLoader from "react-spinners/ClipLoader";

let loading = true;
let color = "#83c5be";
export const PrimaryButton = ({
  path,
  name,
  click,
  isFetching,
  bgColor,
  py,
  textColor,
}) => {
  const buttonStyle = `text-base bg-${bgColor} py-${py} text-${textColor} hover:text-pry-50 hover:bg-sec rounded-full flex justify-center w-full items-center  px-8 font-body transition duration-300`;
  return (
    <>
      {path ? (
        <NavLink to={path} className={buttonStyle} key={name + "button"}>
          {name}
        </NavLink>
      ) : (
        <button
          type="submit"
          className={buttonStyle}
          onClick={click}
          disabled={isFetching}
        >
          {isFetching ? (
            <ClipLoader color={color} loading={loading} size={25} />
          ) : (
            <span>{name}</span>
          )}
        </button>
      )}
    </>
  );
};
export const SecondaryButton = ({
  path,
  name,
  bgColor,
  textColor,
  borderColor,
  click,
  isFetching,
}) => {
  const buttonStyle = `text-base bg-${bgColor} border border-${borderColor} hover:border-sec py-2 text-${textColor} hover:text-pry-50 hover:bg-sec rounded-full flex justify-center w-full items-center  px-8 font-heading transition duration-300`;
  return (
    <>
      {path ? (
        <NavLink to={path} className={buttonStyle} key={name + "button"}>
          {name}
        </NavLink>
      ) : (
        <button
          type="submit"
          className={buttonStyle}
          onClick={click}
          disabled={isFetching}
        >
          {isFetching ? (
            <ClipLoader color={color} loading={loading} size={25} />
          ) : (
            <span>{name}</span>
          )}
        </button>
      )}
    </>
  );
};

export const FooterIcon = ({ path, icon }) => {
  return (
    <Link
      to={{ pathname: path }}
      target="_blank"
      className="text-pry-50 hover:text-sec transition duration-300"
    >
      {icon}
    </Link>
  );
};

export const UserButton = ({ name, click }) => {
  return (
    <button
      onClick={click}
      className="text-pry-100 border-b border-b-sec py-2 hover:text-sec flex justify-center gap-4 items-center font-body text-base transition duration-300 w-full"
    >
      <span>{name}</span>
      <KeyboardArrowRight />
    </button>
  );
};
