import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPatients } from "../../api/apiCalls";
const PatientsGrid = () => {
  const dispatch = useDispatch();
  const [pageSize, setPageSize] = useState(10);
  useEffect(() => {
    getAllPatients(dispatch);
  }, [dispatch]);
  const patients = useSelector((state) => state.patient.patients);
  const columns = [
    {
      field: "user",
      headerName: "Patient",
      flex: 1,
      renderCell: (params) => {
        return (
          <div className="flex items-center justify-center">
            {/* <img
              className="w-12 h-12"
              src={params.row.img}
              alt={params.row.name}
            /> */}
            {params.row.name}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "phoneNumber", headerName: "Phone Number", flex: 1 },

    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: (params) => {
        return (
          <>
            <Link to={`../patients/${params.row._id}`}>
              <button className="border-0 w-full font-body text-base hover:bg-sec hover:text-pry-50 transition duration-300 px-6 py-2 bg-pry-100 text-pry-50 rounded-full">
                Manage patient
              </button>
            </Link>
          </>
        );
      },
    },
  ];
  return (
    <div className="flex h-screen flex-col">
      <h1 className="font-heading text-lg lg:text-2xl text-pry-100 mb-6">
        Patients
      </h1>
      <div className="flex-1">
        <DataGrid
          rows={patients?.length ? patients : patients}
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

export default PatientsGrid;
