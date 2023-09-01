import { OTP_STATUS } from "./otpStatusActionType";

export const otpStatus = (payload) => {
  return {
    type: OTP_STATUS,
    payload: payload,
  };
};
