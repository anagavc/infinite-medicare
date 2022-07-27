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
  addProductStart,
  addProductSuccess,
  addProductFailure,
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
} from "../redux/productSlice";
import {
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
} from "../redux/prescriptionSlice";

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

export const updateUserInfo = async (id, user, dispatch, navigate) => {
  dispatch(updateUserStart());
  try {
    const res = await publicRequest.patch(`users/${id}`, user);
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

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
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
export const getUserPrescriptions = async (userID, dispatch) => {
  try {
    const res = await publicRequest.get(`prescriptions/${userID}`);
    dispatch(addPrescription(res.data));
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

export const deletePrescription = async (id, dispatch) => {
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
    navigate("prescriptions");
  } catch (error) {
    dispatch(updatePrescriptionFailure());
  }
};
// prescriptions apiCalls ends
