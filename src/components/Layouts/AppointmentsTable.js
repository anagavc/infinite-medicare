import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

const AppointmentsTable = ({ appointments }) => {
  const [pageSize, setPageSize] = useState(10);

  const columns = [
    { field: "_id", headerName: "ID", flex: 1 },
    { field: "date", headerName: "Date", flex: 1 },
    { field: "specialty", headerName: "Specialty", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
  ];
  return (
    <div className="flex h-full">
      <div className="w-full h-full mb-48">
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

export default AppointmentsTable;
