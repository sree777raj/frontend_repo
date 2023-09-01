import React, { useState } from "react";
import { ForgotPasswordStyle } from "./ForgotPasswordStyle";
import { useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Container, Grid, Typography, Box } from "@mui/material";
import MailOutline from "@mui/icons-material/MailOutline";
import Button from "@mui/material/Button";
import { createSearchParams, useNavigate } from "react-router-dom";
import ImpInformation from "../ImportantInformation/ImpInformation";
import InputFields from "../Forms/CustomInputs/InputFields";
import InputAdornment from "@mui/material/InputAdornment";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
      setEmailError("");
    }
  };

  const handleSubmit = (e) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    e.preventDefault();

    if (!email) {
      setEmailError("Email is required");
    } else if (!emailRegex.test(email)) {
      setEmailError("Invalid email format");
    } else {
      // Clear error and submit form if validation passes
      setEmailError("");
      navigate({
        pathname: "/create-new-password",
        search: createSearchParams({
          email,
        }).toString(),
      });
    }
  };

  const navigate = useNavigate();

  const theme = useTheme();
  const style = ForgotPasswordStyle(theme);

  return (
    <>
      <Container maxWidth={false} sx={style.fpwcontainer} disableGutters>
        <Grid container>
          <CssBaseline />
          <ImpInformation />
          <Grid item sx={style.gridRight} xs={12} sm={12} md={6} square>
            <Box>
              <Typography sx={style.inboxHeading} variant="h2">
                Forgot Password?
              </Typography>
              <Typography sx={style.inboxHeadingtwo} variant="h6">
                <i>
                  Don’t worry. It happens to the best of us. Luckily for you,
                  help is one-step away.
                </i>
              </Typography>
              <Box component="form" onSubmit={handleSubmit} sx={style.formBox}>
                <InputFields
                  label="Please enter your email address"
                  type="email"
                  variant="outlined"
                  value={email}
                  name="email"
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <MailOutline />
                      </InputAdornment>
                    ),
                  }}
                  onChange={handleOnChange}
                  error={emailError}
                  helperText={emailError}
                />
                <Box>
                  <Button
                    sx={style.GreenButton}
                    variant="contained"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    <Typography
                      variant="h6"
                      sx={{ color: theme.palette.secondary.main }}
                    >
                      Click to send OTP
                    </Typography>
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

export default ForgotPassword;
