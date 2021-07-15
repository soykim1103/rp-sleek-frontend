import axios from "axios";
import { BASE_URL } from "../config";
export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export function registerError(payload) {
  return {
    type: REGISTER_FAILURE,
    payload,
  };
}

export const registerUser = (payload) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `${BASE_URL}/user/register`,
      payload.creds,
      config
    );

    console.log("Registration Successful");
    alert("Registration Successful");

    window.open("http://localhost:3001/login", "_self");

    dispatch({
      type: REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch(registerError("Something was wrong. Try again"));
  }
};
