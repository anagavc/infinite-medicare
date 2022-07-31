import Footer from "./Footer";
import NavBar from "../Navigation/NavBar";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Toaster />

      {children}
      <Footer />
    </>
  );
};

export default Layout;
