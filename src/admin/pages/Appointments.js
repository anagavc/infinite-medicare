import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAppointments } from "../../api/apiCalls";
const Appointments = () => {
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
  ];
  return (
    <div className="flex h-screen flex-col">
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
