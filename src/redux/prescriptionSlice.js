import { createSlice } from "@reduxjs/toolkit";
const prescriptionSlice = createSlice({
  name: "prescription",
  initialState: {
    prescriptions: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    addPrescription: (state, action) => {
      state.prescriptions = action.payload;
    },
    updateUserPrescription: (state, action) => {
      state.prescriptions[
        state.prescriptions.findIndex(
          (prescription) => prescription._id === action.payload.id
        )
      ] = action.payload.prescription;
    },
    getPrescriptionStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getPrescriptionSuccess: (state, action) => {
      state.isFetching = false;
      state.prescriptions = action.payload;
    },
    getPrescriptionFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    deletePrescriptionStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deletePrescriptionSuccess: (state, action) => {
      state.isFetching = false;
      state.prescriptions.splice(
        state.prescriptions.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deletePrescriptionFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    updatePrescriptionStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updatePrescriptionSuccess: (state, action) => {
      state.isFetching = false;
      state.prescriptions[
        state.prescriptions.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.prescription;
    },
    updatePrescriptionFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});
export const {
  addPrescription,
  updateUserPrescription,
  getPrescriptionStart,
  getPrescriptionSuccess,
  getPrescriptionFailure,
  deletePrescriptionStart,
  deletePrescriptionSuccess,
  deletePrescriptionFailure,
  updatePrescriptionStart,
  updatePrescriptionSuccess,
  updatePrescriptionFailure,
} = prescriptionSlice.actions;
export default prescriptionSlice.reducer;
