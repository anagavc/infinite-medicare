import { useState } from "react";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import {
  PatientsGrid,
  Dashboard,
  Appointments,
  Subscribers,
  AddNews,
  Blog,
  PatientDetails,
} from "../pages";
import Prescriptions from "../pages/Prescriptions";

const AdminLayout = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="h-full flex flex-1 overflow-hidden w-full">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className="flex flex-col flex-1 bg-pry-50  ">
        <Header setIsOpen={setIsOpen} />
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="lg:px-12 px-0 pb-10">
            <Routes>
              <Route path="/dashboard/" element={<Dashboard />} />
              <Route path="/patients/*" element={<PatientsGrid />} />
              <Route path="/patients/:id" element={<PatientDetails />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/addNews" element={<AddNews />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/prescriptions" element={<Prescriptions />} />
              <Route path="/subscribers" element={<Subscribers />} />
            </Routes>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
