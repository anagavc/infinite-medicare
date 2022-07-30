import { publicRequest, userRequest } from "./requests";
import {
  registrationStart,
  registrationSuccess,
  registrationFailure,
  loginStart,
  loginSuccess,
  loginFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  logoutSuccess,
} from "../redux/userSlice";
import {
  getPatientsStart,
  getPatientsSuccess,
  getPatientsFailure,
  updatePatientStart,
  updatePatientSuccess,
  updatePatientFailure,
  deletePatientStart,
  deletePatientSuccess,
  deletePatientFailure,
} from "../redux/patientSlice";
import {
  addProductStart,
  addProductSuccess,
  addProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
} from "../redux/productSlice";
import {
  addPrescriptionStart,
  addPrescriptionSuccess,
  addPrescriptionFailure,
  getPrescriptionStart,
  getPrescriptionSuccess,
  getPrescriptionFailure,
  deletePrescriptionStart,
  deletePrescriptionSuccess,
  deletePrescriptionFailure,
  updatePrescriptionStart,
  updatePrescriptionSuccess,
  updatePrescriptionFailure,
} from "../redux/prescriptionSlice";
import {
  addAppointmentStart,
  addAppointmentSuccess,
  addAppointmentFailure,
  getAppointmentStart,
  getAppointmentSuccess,
  getAppointmentFailure,
  updateAppointmentStart,
  updateAppointmentSuccess,
  updateAppointmentFailure,
} from "../redux/appointmentSlice";

export const registration = async (dispatch, navigate, user) => {
  dispatch(registrationStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(registrationSuccess(res.data));
    navigate("/account", { replace: true });
  } catch (err) {
    console.log(err.message);
    dispatch(registrationFailure());
  }
};

export const login = async (dispatch, navigate, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    res.data.isAdmin
      ? navigate("/admin/dashboard", { replace: true })
      : navigate("/account", { replace: true });
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const logout = (dispatch, navigate) => {
  dispatch(logoutSuccess());
  navigate("/login", { replace: true });
};

export const updateUserInfo = async (id, user, dispatch) => {
  dispatch(updateUserStart());
  try {
    const res = await publicRequest.patch(`users/${id}`, user);
    dispatch(updateUserSuccess(res.data));
  } catch (error) {
    console.log(error.message);
    dispatch(updateUserFailure());
  }
};
export const updateUserInfoByAdmin = async (id, user, dispatch, navigate) => {
  dispatch(updatePatientStart());
  try {
    await userRequest.patch(`users/${id}`, user);
    dispatch(updatePatientSuccess({ id, user }));
    navigate("../patients", { replace: true });
  } catch (error) {
    console.log(error.message);
    dispatch(updatePatientFailure());
  }
};
export const updateUserPassword = async (id, user, dispatch, navigate) => {
  dispatch(updateUserStart());
  try {
    const res = await publicRequest.put(`users/${id}`, user);
    dispatch(updateUserSuccess(res.data));
    navigate("/account");
  } catch (error) {
    console.log(error.message);
    dispatch(updateUserFailure());
  }
};

export const addProduct = async (dispatch, product) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post("/products", product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};
//appointment api calls begin
export const bookAppointment = async (dispatch, appointment) => {
  dispatch(addAppointmentStart());
  try {
    const res = await userRequest.post("/appointments", appointment);
    dispatch(addAppointmentSuccess(res.data));
  } catch (err) {
    dispatch(addAppointmentFailure());
  }
};
export const makeAppointment = async (dispatch, appointment) => {
  dispatch(addAppointmentStart());
  try {
    dispatch(addAppointmentSuccess(appointment));
  } catch (err) {
    dispatch(addAppointmentFailure());
  }
};
export const getUserAppointments = async (dispatch, userID) => {
  dispatch(getAppointmentStart());
  try {
    const res = await userRequest.get(`/appointments/${userID}`);
    dispatch(getAppointmentSuccess(res.data));
  } catch (error) {
    dispatch(getAppointmentFailure());
    console.log(error);
  }
};
export const getAllAppointments = async (dispatch) => {
  dispatch(getAppointmentStart());
  try {
    const res = await userRequest.get(`/appointments`);
    dispatch(getAppointmentSuccess(res.data));
  } catch (error) {
    dispatch(getAppointmentFailure());
    console.log(error);
  }
};
export const updateAppointment = async (
  id,
  appointment,
  dispatch,
  navigate
) => {
  dispatch(updateAppointmentStart());
  try {
    const res = await userRequest.put(`/appointments/${id}`, appointment);
    dispatch(updateAppointmentSuccess(res.data));
    navigate("../appointments");
  } catch (err) {
    dispatch(updateAppointmentFailure());
  }
};
//appointments api calls ends

//user api calls begins
export const getAllPatients = async (dispatch) => {
  dispatch(getPatientsStart());
  try {
    const res = await userRequest.get("/users");
    dispatch(getPatientsSuccess(res.data));
  } catch (err) {
    dispatch(getPatientsFailure());
  }
};
export const getUser = async (dispatch, userID) => {
  dispatch(getPatientsStart());
  try {
    const res = await userRequest.get(`/users/find/${userID}`);
    dispatch(getPatientsSuccess(res.data));
  } catch (err) {
    dispatch(getPatientsFailure());
  }
};

export const deletePatient = async (dispatch, id, navigate) => {
  dispatch(deletePatientStart());
  try {
    await userRequest.delete(`/users/${id}`);
    dispatch(deletePatientSuccess(id));
    navigate("../patients");
  } catch (err) {
    dispatch(deletePatientFailure());
  }
};

export const updateProduct = async (id, product, dispatch, navigate) => {
  dispatch(updateProductStart());
  try {
    await userRequest.put(`/products/${id}`, product);
    dispatch(updateProductSuccess({ id, product }));
    navigate("../products");
  } catch (err) {
    dispatch(updateProductFailure());
  }
};

// prescriptions apiCalls begins
export const createPrescription = async (dispatch, prescription) => {
  dispatch(addPrescriptionStart());
  try {
    const res = await userRequest.post("/prescriptions", prescription);
    dispatch(addPrescriptionSuccess(res.data));
  } catch (err) {
    dispatch(addPrescriptionFailure());
  }
};
export const getUserPrescriptions = async (dispatch, userID) => {
  dispatch(getPrescriptionStart());
  try {
    const res = await userRequest.get(`prescriptions/${userID}`);
    dispatch(getPrescriptionSuccess(res.data));
  } catch (error) {
    dispatch(getPrescriptionFailure());
    console.log(error);
  }
};

export const getAllPrescriptions = async (dispatch) => {
  dispatch(getPrescriptionStart());
  try {
    const res = await userRequest.get("prescriptions");
    dispatch(getPrescriptionSuccess(res.data));
  } catch (error) {
    dispatch(getPrescriptionFailure());
    console.error(error);
  }
};

export const deletePrescription = async (dispatch, id) => {
  dispatch(deletePrescriptionStart());
  try {
    await userRequest.delete(`prescriptions/${id}`);
    console.log(id);
    dispatch(deletePrescriptionSuccess(id));
  } catch (error) {
    dispatch(deletePrescriptionFailure());
    console.error(error);
  }
};

export const updatePrescription = async (
  id,
  prescription,
  dispatch,
  navigate
) => {
  dispatch(updatePrescriptionStart());
  try {
    const res = await userRequest.patch(`/prescriptions/${id}`, prescription);
    dispatch(updatePrescriptionSuccess(res.data));
    navigate("../prescriptions");
  } catch (error) {
    dispatch(updatePrescriptionFailure());
  }
};
// prescriptions apiCalls ends
