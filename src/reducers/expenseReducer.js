import {
    FETCH_EXPENSE,
    SET_EXPENSE,
    FAILED_EXPENSE_FETCH,
    FETCH_USERS,
    SET_USERS,
    FAILED_USERS_FETCH,
    NEW_EXPENSE_REQUEST,
    NEW_EXPENSE_SUCCESS,
    NEW_EXPENSE_FAIL,
  } from '../actions/expenseAction';
  
  const initalState = {
    fetching: false,
    expenses: [],
    users: [],
    success: false,
    error: null
  };
    
  export const newExpenseReducer = (state={}, {type, payload})=>{
    switch(type){
        case NEW_EXPENSE_REQUEST:
            return { fetching: true };
        case NEW_EXPENSE_SUCCESS:
            return { fetching: false, expenses: payload, success: true };
        case NEW_EXPENSE_FAIL:
            return {fetching: false, error: payload};
        default: 
          return state;
    }
  };
  
  export const expenseReducer = (state = initalState, { type, payload }) => {
    switch (type) {
      case FETCH_EXPENSE:
        return { fetching: true, expenses: [], error: null };
      case SET_EXPENSE:
        return { ...state, fetching: false, expenses: payload, error: null };
      case FAILED_EXPENSE_FETCH:
        return { ...state, fetching: false, expenses: [], error: payload };
  
      default:
        return state;
    }
  };
  export const usersReducer = (state = initalState, { type, payload }) => {
    switch (type) {
      case FETCH_USERS:
        return { fetching: true, users: [], error: null };
      case SET_USERS:
        return { ...state, fetching: false, users: payload, error: null };
      case FAILED_USERS_FETCH:
        return { ...state, fetching: false, users: [], error: payload };
  
      default:
        return state;
    }
  };
