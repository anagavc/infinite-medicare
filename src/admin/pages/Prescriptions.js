import { DeleteForever } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPrescriptions } from "../../api/apiCalls";
import { UpdatePrescriptionDialog } from "../../components/Layouts/Modal";
const Prescriptions = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [prescriptionId, setPrescriptionId] = useState("");
  const dispatch = useDispatch();
  const [pageSize, setPageSize] = useState(10);
  const prescriptions = useSelector(
    (state) => state.prescription.prescriptions
  );
  useEffect(() => {
    getAllPrescriptions(dispatch);
  }, [dispatch]);

  const columns = [
    { field: "date", headerName: "Issuance date", flex: 1 },
    { field: "patientName", headerName: "Patient's name", flex: 1 },
    { field: "drug", headerName: "Drug", flex: 1 },
    { field: "email", headerName: "Patient's email", flex: 1 },

    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: (params) => {
        return (
          <div className="flex gap-2">
            <button
              onClick={() => {
                setModalType("update");
                setShowModal(!showModal);
                setPrescriptionId(params.row._id);
              }}
              className="border-0 w-full font-body flex justify-center items-center text-base hover:bg-sec hover:text-pry-50 transition duration-300 px-6 py-2 bg-pry-100 text-pry-50 rounded-full"
            >
              Update
            </button>
            <button
              onClick={() => {
                setModalType("delete");
                setShowModal(!showModal);
                setPrescriptionId(params.row._id);
              }}
              className=" hover:text-red-500 transition duration-300  text-red-600"
            >
              <DeleteForever />
            </button>
          </div>
        );
      },
    },
  ];
  return (
    <div className="flex h-screen flex-col">
      {modalType === "update" && (
        <UpdatePrescriptionDialog
          prescriptionId={prescriptionId}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
      <h1 className="font-heading text-lg lg:text-2xl text-pry-100 mb-6">
        Prescriptions
      </h1>
      <div className="flex-1">
        <DataGrid
          rows={prescriptions}
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

export default Prescriptions;
