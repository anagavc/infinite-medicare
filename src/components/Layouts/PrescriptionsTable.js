import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

const PrescriptionsTable = ({ prescriptions }) => {
  const [pageSize, setPageSize] = useState(10);

  const columns = [
    { field: "date", headerName: "Date to commence medication", flex: 1 },
    { field: "drug", headerName: "Drugs", flex: 1 },
  ];
  return (
    <div className="flex h-full">
      <div className="w-full h-full mb-48">
        <DataGrid
          rows={prescriptions?.length ? prescriptions : []}
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

export default PrescriptionsTable;
