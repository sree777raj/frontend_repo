import React, { useState } from "react";
import Prakat_Logo from "../../assets/Prakat_Logo.png";
import MobLogo from "../../assets/mobLogo.png";
import { Box, Typography, Button,} from "@mui/material";
import useMobileScreen from "../../customHooks/useMobileScreen";
import { LoginStyle } from "./LoginStyle";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/login/loginAction";
import { useTheme } from "@mui/material/styles";
import InputFields from "../Forms/CustomInputs/InputFields";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const mobile = useMobileScreen();
  const dispatch = useDispatch();
   const navigate = useNavigate();
  const theme = useTheme();
  const style = LoginStyle(theme);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
      setEmailError("");
    } else if (name === "password") {
      setPassword(value);
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    e.preventDefault();

    if (!email) {
      setEmailError("Email is required");
    } else if (!emailRegex.test(email)) {
      setEmailError("Invalid email format");
    }
    if (!password) {
      setPasswordError("Password is required");
    } else if (password.length < 8 || !passwordRegex.test(password)) {
      setPasswordError("Password is not correct");
    } else {
      const payload = {
        email,
        password,
      };
      setPasswordError(""); // Clear error and submit form if validation passes
      setEmailError("");
      dispatch(login(payload, navigate));
      setEmail("");
      setPassword("");
    }
  };

  return (
    <Box sx={style.mainBoxRight}>
      {mobile ? (
        <Box sx={style.logoBox}>
          <img
            src={MobLogo}
            alt="Logo"
            style={{ width: "80%", maxWidth: "100%", height: "auto" }}
          />
        </Box>
      ) : (
        <Box sx={{ maxWidth: "100%", width: "100%", height: "auto" }}>
          <img
            src={Prakat_Logo}
            alt="Logo"
            style={{ width: "80%", maxWidth: "100%", height: "auto" }}
          />
        </Box>
      )}
      <Box
        p={2}
        bgcolor={theme.palette.primary.main}
        color={theme.palette.secondary.main}
        sx={style.boxIWill}
      >
        <Typography variant="h1" sx={style.IWillMobile}>
          I WILL
        </Typography>
      </Box>
      <Box sx={style.inputOutsideBox}>
        <Box sx={style.inputOutsideBoxText}>
          <Typography sx={style.formHeading}>Welcome Back </Typography>
          <Typography sx={style.formHeading1}>
            Today is a new day. It&apos;s your day. You shape it.
          </Typography>
          <Typography sx={style.formHeading1}>
            Sign in to start managing your projects.
          </Typography>
        </Box>

        <Box sx={style.inputBox}>
          <InputFields
            styling="true"
            label="Email"
            type="email"
            name="email"
            error={emailError}
            helper={emailError}
            onChange={handleOnChange}
            value={email}
          />
          <InputFields
            styling="true"
            label="Password"
            type="password"
            name="password"
            error={passwordError}
            helper={passwordError}
            onChange={handleOnChange}
            value={password}
          />
          {!mobile && (
            <Typography component={Link} to="/fogot-password" sx={style.fpDesktop}>
              Forgot Password?
            </Typography>
          )}
          {!mobile ? (
            <Button
              sx={style.signinButton}
              color="secondary"
              variant="contained"
              type="submit"
              onClick={handleSubmit}
            >
              <Typography variant="h6" color="primary">
                Sign In
              </Typography>
            </Button>
          ) : (
            <Button
              sx={style.loginButtonMobile}
              color="primary"
              variant="contained"
              type="submit"
              onClick={handleSubmit}
            >
              <Typography variant="h6" color="secondary">
                Submit
              </Typography>
            </Button>
          )}
          {mobile && (
            <Typography component={Link} to="/fp" sx={style.fpMobile}>
              Forgot Password?
            </Typography>
          )}
        </Box>
      </Box>
      <Typography>2023 ALL RIGHTS RESERVED</Typography>
    </Box>
  );
};

export default LoginForm;
