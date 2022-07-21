import { NavLink } from "react-router-dom";
import React from "react";
// import ClipLoader from "react-spinners/ClipLoader";

// export const FooterIcon = ({ path, icon }) => {
//   return (
//     <NavLink
//       to={path}
//       className="text-pry-50 hover:text-sec transition duration-300"
//     >
//       {icon}
//     </NavLink>
//   );
// };

export const PrimaryButton = ({
  path,
  name,
  click,
  isFetching,
  bgColor,
  py,
  textColor,
}) => {
  const buttonStyle = `text-base bg-${bgColor} py-${py} text-${textColor} hover:text-pry-50 hover:bg-sec rounded-full flex justify-center w-full items-center  px-8 font-heading transition duration-300`;
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
          {/* {isFetching ? (
            <ClipLoader color={color} loading={loading} size={25} />
          ) : (
            <span>{name}</span>
          )} */}
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
          {/* {isFetching ? (
            <ClipLoader color={color} loading={loading} size={25} />
          ) : (
            <span>{name}</span>
          )} */}
        </button>
      )}
    </>
  );
};
