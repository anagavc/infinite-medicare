import { useState } from "react";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import Dashboard from "../pages/Dashboard";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="h-screen flex flex-1 overflow-hidden w-full">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className="flex flex-col flex-1 bg-white  ">
        <Header setIsOpen={setIsOpen} />
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="lg:px-12 px-0 pb-10">
            <Routes>
              <Route path="/dashboard/*" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
