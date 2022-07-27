import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { userRequest } from "../../api/requests";

const Appointments = () => {
  const [bookings, setBookings] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  useEffect(() => {
    const getBookings = async () => {
      try {
        const res = await userRequest.get("/bookings");
        setBookings(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getBookings();
  }, []);

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 280,
      renderCell: (params) => {
        return (
          <div className="flex items-center justify-center">
            {params.row._id}
          </div>
        );
      },
    },
    {
      field: "name",
      headerName: "Name",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="flex items-center justify-center">
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="flex items-center justify-center">
            {params.row.email}
          </div>
        );
      },
    },
    {
      field: "comment",
      headerName: "Comment",
      width: 1000,
      renderCell: (params) => {
        return (
          <div className="flex items-center justify-center">
            {params.row.comment}
          </div>
        );
      },
    },
  ];
  return (
    <div className="flex h-screen flex-col">
      <h1 className="font-heading text-lg lg:text-2xl text-pry-100 mb-6">
        Appointments
      </h1>
      <div className="flex-1">
        <DataGrid
          rows={bookings}
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
