import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";

const AppointmentsTable = ({ appointments }) => {
  const [pageSize, setPageSize] = useState(10);

  const columns = [
    { field: "date", headerName: "Date", flex: 1 },
    { field: "specialty", headerName: "Specialty", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
    { field: "report", headerName: "Consultation report", flex: 1 },
  ];
  return (
    <div className="flex h-screen">
      <div className="w-full">
        <DataGrid
          rows={appointments}
          disableSelectionOnClick
          columns={columns}
          getRowId={(row) => row._id || 1}
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
