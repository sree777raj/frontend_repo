import { OTP_STATUS } from "../actions/otpStatusAction/otpStatusActionType";

// Initial state
const initialState = {
  otp: null,
};

// Reducer function
const otpStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case OTP_STATUS:
      return {
        ...state,
        otp: action.payload,
      };
    default:
      return state;
  }
};

export default otpStatusReducer;
