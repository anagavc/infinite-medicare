import { createSlice } from "@reduxjs/toolkit";
const patientSlice = createSlice({
  name: "patient",
  initialState: {
    patients: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    getPatientsStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },

    getPatientsSuccess: (state, action) => {
      state.isFetching = true;
      state.patients = action.payload;
      state.isFetching = false;
    },
    getPatientsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    deletePatientStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.isFetching = false;
    },
    deletePatientSuccess: (state, action) => {
      state.isFetching = false;
      state.patients.splice(
        state.patients.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deletePatientFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getPatientsStart,
  getPatientsSuccess,
  getPatientsFailure,
  deletePatientStart,
  deletePatientSuccess,
  deletePatientFailure,
} = patientSlice.actions;
export default patientSlice.reducer;
