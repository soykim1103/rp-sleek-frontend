import axios from "axios";
import { BASE_URL } from "../config";

export const FETCH_EXPENSE = "FETCH_EXPENSE";
export const SET_EXPENSE = "SET_EXPENSE";
export const FAILED_EXPENSE_FETCH = "FAILED_EXPENSE_FETCH";
export const NEW_EXPENSE_REQUEST = "NEW_EXPENSE_REQUEST";
export const NEW_EXPENSE_SUCCESS = "NEW_EXPENSE_SUCCESS";
export const NEW_EXPENSE_FAIL = "NEW_EXPENSE_FAIL";
export const FETCH_USERS = "FETCH_USERS";
export const SET_USERS = "SET_USERS";
export const FAILED_USERS_FETCH = "FAILED_USERS_FETCH";

export const fetchExpense = () => ({
  type: FETCH_EXPENSE,
});
export const fetchUsers = () => ({
  type: FETCH_USERS,
});

export const setExpense = (payload) => ({
  type: SET_EXPENSE,
  payload,
});

export const setUsers = (payload) => ({
  type: SET_USERS,
  payload,
});

export const setError = (payload) => ({
  type: FAILED_EXPENSE_FETCH,
  FAILED_USERS_FETCH,
  payload,
});

const accessToken = JSON.parse(localStorage.getItem("splitup"))
  ? JSON.parse(localStorage.getItem("splitup")).token
  : "";

export const newExpense = (amount, currency) => async (dispatch) => {
  try {
    dispatch({ type: NEW_EXPENSE_REQUEST });
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    let data2 = JSON.parse(localStorage.getItem("splitup"));
    let user = data2.user;
    let user_id = user.user_id;
    const res = await axios.get(`${BASE_URL}/wallet/${user_id}`, config);
    const w_data = res.data;

    const { data } = await axios.post(
      `${BASE_URL}/wallet/topup`,
      {
        user_id: user_id,
        wallet_id: w_data.wallet_id,
        amount: amount,
        currency: currency || "SGD",
      },
      config
    );
    dispatch({
      type: NEW_EXPENSE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_EXPENSE_FAIL,
      payload: {
        message:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      },
    });
  }
};

export const getAllExpense = () => async (dispatch) => {
  dispatch(fetchExpense());
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    let data2 = JSON.parse(localStorage.getItem("splitup"));
    let user = data2.user;
    let user_id = user.user_id;
    const res = await axios.get(`${BASE_URL}/wallet/${user_id}`, config);
    const data = res.data;
    dispatch(setExpense(data));
    return res;
  } catch (error) {
    console.log(error);
    dispatch(setError("Something was wrong. Try again"));
  }
};
export const getAllUsers = () => async (dispatch) => {
  dispatch(fetchUsers());
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const res = await axios.get(`${BASE_URL}/user/emails`, config);
    const data = res.data;
    dispatch(setUsers(data));
    return res;
  } catch (error) {
    dispatch(setError("Something was wrong. Try again"));
  }
};
