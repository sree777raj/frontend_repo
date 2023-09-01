import { toast } from "react-toastify";
import makeRequest from "../../../api/api";
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "./loginActionTypes";

const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};
const loginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};
const loginFail = (error) => {
  return {
    type: LOGIN_FAIL,
    payload: error,
  };
};

export const login = (data, navigate) => {
  return async (dispatch) => {
    try {
      dispatch(loginRequest());
      const users = await makeRequest("POST", "/auth/authenticate", data);
      dispatch(loginSuccess(users?.token));
      localStorage.setItem("token", users?.token);
      navigate("/sidebar");
    } catch (err) {
      if (err.response && err.response.status === 403) {
        // Handle 403 error here
        // For example, you can dispatch an action to update the state
        // indicating that the login credentials are invalid
        dispatch(loginFail("Invalid login credentials."));
        toast.error("Invalid login Credentails", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        // Handle other errors
        // For example, you can display a generic error message
        toast.error("An error occured", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    }
  };
};
