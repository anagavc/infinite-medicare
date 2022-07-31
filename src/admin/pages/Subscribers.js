import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { userRequest } from "../../api/requests";

const Subscribers = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  useEffect(() => {
    const getSubscribers = async () => {
      try {
        const res = await userRequest.get("/subscription");
        setSubscribers(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getSubscribers();
  }, []);

  const columns = [
    {
      field: "email",
      headerName: "Email",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="flex items-center justify-center">
            {params.row.subscriberEmail}
          </div>
        );
      },
    },
  ];
  return (
    <div className="flex h-screen flex-col">
      <h1 className="text-pry-100 text-center font-heading text-xl font-bold mb-4">
        Subscribers
      </h1>
      <div className="flex-1">
        <DataGrid
          rows={subscribers}
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

export default Subscribers;
