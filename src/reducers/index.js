import { combineReducers } from "redux";
import navigation from "./navigation.js";
import register from "./register.js";
import auth from "./auth.js";
import {expenseReducer, newExpenseReducer, usersReducer} from './expenseReducer'

export default combineReducers({
  register,
  auth,
  navigation,
  expense: expenseReducer,
  newExpense: newExpenseReducer,
  allUsers: usersReducer
});