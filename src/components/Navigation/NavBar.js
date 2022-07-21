import React, { useState } from "react";

// import { Close, Menu } from "@mui/icons-material";
import NavItem from "./NavItem";
import { PrimaryButton } from "../UI/Buttons";
import { NavLink } from "react-router-dom";
// import logo from "../../images/logo.png";

// import { useSelector, useDispatch } from "react-redux";
// import { logoutSuccess } from "../../redux/userSlice";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  // const dispatch = useDispatch();
  const { currentUser } = true;
  const handleClose = () => {
    setOpen(!open);
  };
  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Services",
      path: "/#services",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Contact",
      path: "/#contact",
    },
  ];
  const logoutHandler = () => {
    // dispatch(logoutSuccess());
    setOpen(!open);
    // router.push("/Login");
  };
  return (
    <div className="drop-shadow flex justify-between w-full fixed top-0 left-0 bg-pry-100 px-12 z-50">
      <div className="flex justify-start items-center lg:py-3 lg:px-10  py-4 z-10">
        <div className="flex justify-center items-center space-x-2 h-full">
          <div className="w-8 h-8 ">{/* <img src={logo} alt="logo" /> */}</div>
          <NavLink to="/">
            <span className="text-lg cursor-pointer text-pry-50 font-heading justify-center hover:text-sec transition duration-300  flex items-center">
              Infinite Medicare
            </span>
          </NavLink>
        </div>

        <div
          className="text-3xl text-pry-50 absolute right-4 lg:hidden  top-2 cursor-pointer transition duration-300 "
          onClick={() => setOpen(!open)}
        >
          {/* {open ? <Close /> : <Menu />} */}
        </div>
      </div>
      {/* mobile navigation  begins*/}
      <div
        className={`lg:hidden   flex flex-col border-b-4 border-b-sec lg:flex-row -z-10 translate-y-0 justify-between space-y-4 divide pt-12 pb-16 mt-16 items-center px-12   absolute  bg-pry-100  left-0 w-full  transition-all duration-500 ease-in ${
          open ? `translate-y-0` : `-translate-y-full`
        }`}
      >
        {navItems.map((link) => {
          return (
            <NavItem
              name={link.name}
              key={link.name + "mobile"}
              path={link.path}
              id={link.name}
              click={handleClose}
            />
          );
        })}
        {currentUser ? (
          <>
            <NavItem
              path="/account"
              key="accountButton"
              name="Account"
              click={handleClose}
            />

            <PrimaryButton name="Signout" click={logoutHandler} />
          </>
        ) : (
          <>
            <NavItem
              path="/Login"
              key="loginButton"
              name="Login"
              click={handleClose}
            />
            <PrimaryButton
              name="Register"
              path="/register"
              bgColor="pry-50"
              click={handleClose}
            />
          </>
        )}
      </div>
      {/* mobile navigation  ends*/}

      <div className="lg:flex justify-between items-center space-x-8 hidden">
        {navItems.map((link) => (
          <NavItem
            name={link.name}
            path={link.path}
            id={link.name + "desktop"}
            key={link.name + "desktop"}
          />
        ))}
      </div>
      <div className="lg:flex  items-center hidden  space-x-8  justify-center  px-12 lg:py-2 pb-12  lg:static bg-pry-100 lg:z-40 z-40 w-full lg:w-auto lg:px-0">
        <div className="flex justify-center items-center space-x-8">
          {currentUser ? (
            <>
              <NavItem path="/account" key="accountButton" name="Account" />

              <PrimaryButton name="Signout" click={logoutHandler} />
            </>
          ) : (
            <>
              <NavItem path="login" key="loginButton" name="Login" />
              <PrimaryButton
                name="Register"
                path="/register"
                textColor="pry-100"
                py="2"
                bgColor="pry-50"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
