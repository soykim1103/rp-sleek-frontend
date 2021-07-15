import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from "../actions/register.js";

export default function register(state = {
  isFetching: false,
  errorMessage: '',
}, action) {
  switch (action.type) {
    case REGISTER_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case REGISTER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: '',
      });
    case REGISTER_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.payload,
      });
    default:
      return state;
  }
}

// export default function register(state = {}, { type, payload }) {
//   switch (type) {
//     case REGISTER_REQUEST:
//       return { isFetching: true };
//     case REGISTER_SUCCESS:
//       return { isFetching: false, success: true };
//     case REGISTER_FAILURE:
//       return { isFetching: false, error: payload };
//     default:
//       return state;
//   }
// };