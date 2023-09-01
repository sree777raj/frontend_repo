import React from "react";
import { MuiOtpInput } from "mui-one-time-password-input";
import { Box, FormHelperText } from "@mui/material";

const OTPInputFields = ({ otp, onChange, otpError }) => {
  return (
    <Box>
      <MuiOtpInput
        sx={{ gap: 1 }}
        onChange={onChange}
        value={otp}
        TextFieldsProps={{
          type: "number",
          name: "otp",
        }}
        length={6}
      />
      {otpError && <FormHelperText error>{otpError}</FormHelperText>}
    </Box>
  );
};

export default OTPInputFields;
