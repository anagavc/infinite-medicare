import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAppointments } from "../../api/apiCalls";
import { UpdateAppointmentDialog } from "../../components/Layouts/Modal";
const Appointments = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [appointmentId, setAppointmentId] = useState("");
  const dispatch = useDispatch();
  const [pageSize, setPageSize] = useState(10);
  const appointments = useSelector((state) => state.appointment.appointments);
  useEffect(() => {
    getAllAppointments(dispatch);
  }, [dispatch]);

  const columns = [
    { field: "date", headerName: "Date", flex: 1 },
    { field: "name", headerName: "Patient's name", flex: 1 },
    { field: "email", headerName: "Patient's email", flex: 1 },
    { field: "specialty", headerName: "Specialty", flex: 1 },
    { field: "status", headerName: "Appointment status", flex: 1 },
    { field: "report", headerName: "Consultation report", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: (params) => {
        return (
          <button
            onClick={() => {
              setModalType("appointment");
              setShowModal(!showModal);
              console.log(params.row._id);
              setAppointmentId(params.row._id);
            }}
            className="border-0 w-full font-body flex justify-center items-center text-base hover:bg-sec hover:text-pry-50 transition duration-300 px-6 py-2 bg-pry-100 text-pry-50 rounded-full"
          >
            Add report
          </button>
        );
      },
    },
  ];
  return (
    <div className="flex h-screen flex-col">
      {modalType === "appointment" && (
        <UpdateAppointmentDialog
          appointmentId={appointmentId}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
      <h1 className="font-heading text-lg lg:text-2xl text-pry-100 mb-6">
        Appointments
      </h1>
      <div className="flex-1">
        <DataGrid
          rows={appointments}
          disableSelectionOnClick
          columns={columns}
          getRowId={(row) => row._id}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 20]}
          pagination
        />
      </div>
    </div>
  );
};

export default Appointments;
