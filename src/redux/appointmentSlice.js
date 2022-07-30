import { createSlice } from "@reduxjs/toolkit";
const appointmentSlice = createSlice({
  name: "appointment",
  initialState: {
    appointments: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    addAppointmentStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addAppointmentSuccess: (state, action) => {
      state.isFetching = false;
      state.appointments = action.payload;
      state.error = false;
    },
    addAppointmentFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    updateUserAppointment: (state, action) => {
      state.appointments[
        state.appointments.findIndex(
          (appointment) => appointment._id === action.payload.id
        )
      ] = action.payload.appointment;
    },
    getAppointmentStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getAppointmentSuccess: (state, action) => {
      state.isFetching = false;
      state.appointments = action.payload;
    },
    getAppointmentFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    deleteAppointmentStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteAppointmentSuccess: (state, action) => {
      state.isFetching = false;
      state.appointments.splice(
        state.appointments.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteAppointmentFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    updateAppointmentStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateAppointmentSuccess: (state, action) => {
      state.isFetching = false;
      state.appointments[
        state.appointments.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.appointment;
    },
    updateAppointmentFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});
export const {
  addAppointmentStart,
  addAppointmentSuccess,
  addAppointmentFailure,
  updateUserAppointment,
  getAppointmentStart,
  getAppointmentSuccess,
  getAppointmentFailure,
  deleteAppointmentStart,
  deleteAppointmentSuccess,
  deleteAppointmentFailure,
  updateAppointmentStart,
  updateAppointmentSuccess,
  updateAppointmentFailure,
} = appointmentSlice.actions;
export default appointmentSlice.reducer;
