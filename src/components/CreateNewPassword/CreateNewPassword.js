import React, { useState } from "react";
import { CreateNewPasswordStyle } from "./CreateNewPasswordStyle";
import { useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Container, Grid, Typography, Box } from "@mui/material";
import Button from "@mui/material/Button";
import { useLocation } from "react-router-dom";
import InputFields from "../Forms/CustomInputs/InputFields";
import OTPInputFields from "../Forms/CustomInputs/OTPInputFields";
// import { useForm } from "react-hook-form";
import ImpInformation from "../ImportantInformation/ImpInformation";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const CreateNewPassword = () => {
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmNewPasswordError, setConfirmNewPasswordError] = useState("");
  // const navigate = useNavigate();
  const location = useLocation();
  const email = new URLSearchParams(location.search).get("email");

  const otpHandleChange = (data) => {
    setOtp(data);
    setOtpError("");
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    if (name === "password") {
      setPassword(value);
      setPasswordError("");
    } else if (name === "confirmNewPassword") {
      setConfirmNewPassword(value);
      setConfirmNewPasswordError("");
    }
  };

  const onHandleSubmit = (e) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    e.preventDefault();
    if (!otp) {
      setOtpError("Invalid OTP");
    }
    if (!password) {
      setPasswordError("Password is required");
    } else if (password.length < 8 || !passwordRegex.test(password)) {
      setPasswordError(
        "Password must be at least 8 characters long and contain both letters and numbers"
      );
    }
    if (!confirmNewPassword) {
      setConfirmNewPasswordError("Password is required");
    } else if (password !== confirmNewPassword) {
      setConfirmNewPasswordError("Passwords do not match");
    } else if (
      confirmNewPassword.length < 8 ||
      !passwordRegex.test(confirmNewPassword)
    ) {
      setConfirmNewPasswordError(
        "Password must be at least 8 characters long and contain both letters and numbers"
      );
    } else {
      setPasswordError(""); // Clear error and submit form if validation passes
      setConfirmNewPasswordError("");
      const payload = {
        otp,
        password,
        email,
      };
      console.log("payload", payload);
    }

  };



  const theme = useTheme();
  const style = CreateNewPasswordStyle(theme);

  // const { control } = useForm();

  return (
    <>
      <Container maxWidth={false} sx={style.fpwcontainer} disableGutters>
        <Grid container>
          <CssBaseline />
          <ImpInformation />
          <Grid item sx={style.gridRight} xs={12} sm={12} md={6} square>
            {/* OTP Box Section Starts  */}
            <Box>
              <Typography sx={style.inboxHeading} variant="h2">
                Enter Verification Code
              </Typography>
              <Typography sx={style.inboxHeadingtwo} variant="h6">
                <i> Hint: Look for it in your Inbox</i>
              </Typography>
              <Box sx={style.formBox}>
                <Box
                  component="form"
                  onSubmit={onHandleSubmit}
                  sx={style.formBox}
                >
                 <OTPInputFields
                    onChange={otpHandleChange}
                    otp={otp}
                    otpError={otpError}
                  />
                </Box>
              </Box>
            </Box>
            {/* OTP Box Section Ends  */}
            {/* Create New PW Box Section Starts  */}
            <Box>
              <Typography sx={style.inboxHeading} variant="h2">
                Create New Password
              </Typography>
              <Typography sx={style.inboxHeadingtwo} variant="h6">
                <i>
                  Tip: Pick a strong, yet
                  <br />
                  unforgettable one this time
                </i>
              </Typography>
              <Box component="form" onSubmit={onHandleSubmit} sx={style.formBox}>
                <InputFields
                  label="Enter New Password"
                  type="password"
                  variant="outlined"
                  value={password}
                  name="password"
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <VisibilityOff/>
                      </InputAdornment>
                    ),
                  }}
                  onChange={handleOnChange}
                  error={passwordError}
                  helperText={passwordError}
                />
                <br />
                <InputFields
                  label="Confirm New Password"
                  type="password"
                  variant="outlined"
                  value={confirmNewPassword}
                  name="confirmNewPassword"
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <VisibilityOff/>
                      </InputAdornment>
                    ),
                  }}
                  onChange={handleOnChange}
                  error={confirmNewPasswordError}
                  helperText={confirmNewPasswordError}
                />
                <Box>
                  <Button
                    sx={style.GreenButton}
                    variant="contained"
                    type="submit"
                    onClick={onHandleSubmit}
                  >
                    <Typography variant="h6">Sign In</Typography>
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CreateNewPassword;
