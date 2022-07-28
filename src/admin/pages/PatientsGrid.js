import { DataGrid } from "@mui/x-data-grid";

import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, deleteUser } from "../../api/apiCalls";
const PatientsGrid = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.user);
  const [pageSize, setPageSize] = useState(10);
  useEffect(() => {
    getAllUsers(dispatch);
  }, [dispatch]);
  const handleDelete = (id) => {
    deleteUser(id, dispatch);
  };
  const columns = [
    { field: "_id", headerName: "ID", flex: 1 },
    {
      field: "user",
      headerName: "User",
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
    { field: "phoneNumber", headerName: "Phone Number", width: 160 },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`../patients/${params.row._id}`}>
              <button className="border-0 rounded-sm px-4 py-2 bg-pry-100 text-gold my-4">
                View User
              </button>
            </Link>
            <DeleteOutline
              className="text-red-100"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="flex h-screen">
      <div className="flex-1">
        <DataGrid
          rows={users}
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
