import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../actions/login/loginActionTypes";

// Initial state
const initialState = {
  data: [],
  loading: true,
};

// Reducer function
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
      };
    
    default:
      return state;
  }
};

export default loginReducer;
