import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
} from "../actions/auth.js";

const splitup = JSON.parse(localStorage.getItem("splitup"))
  ? JSON.parse(localStorage.getItem("splitup")).token
  : "";

export default function auth(
  state = {
    isFetching: false,
    isAuthenticated: splitup,
  },
  action
) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: false,
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        errorMessage: "",
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.payload,
      });
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: false,
      });
    default:
      return state;
  }
}

// const userLoginState = {
//   splitup: localStorage.getItem('splitup')
//     ? JSON.parse(localStorage.getItem('splitup'))
//     : null,
// };

// export default function auth(state = userLoginState, { type, payload }) {
//   switch (type) {
//     case LOGIN_REQUEST:
//       return { isFetching: true };
//     case LOGIN_SUCCESS:
//       return { isFetching: false, splitup: payload };
//     case LOGIN_FAILURE:
//       return { isFetching: false, error: payload };
//     case LOGOUT_SUCCESS:
//       return { splitup: null };
//     default:
//       return state;
//   }
// };
