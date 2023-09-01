import React from "react";
import { EnterOtpstyle } from "./EnterOtpstyle";
import { useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Container, Grid, Typography, Box } from "@mui/material";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { otpStatus } from "../../redux/actions/otpStatusAction/otpStatusAction";
import { useNavigate } from "react-router-dom";
import ImpInformation from "../ImportantInformation/ImpInformation";
import OTPInputFields from "../Forms/CustomInputs/OTPInputFields";

const EnterOtp = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const navigate = useNavigate();
  console.log("data", data.otp);
 
  const { control, handleSubmit } = useForm({
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = (data) => {
    dispatch(otpStatus(data.otp));
    navigate("/create-new-password"); // Replace '/your-url' with the desired URL
  };

  const theme = useTheme();
  const style = EnterOtpstyle(theme);

  return (
    <>
      <Container maxWidth={false} sx={style.fpwcontainer} disableGutters>
        <Grid container>
          <CssBaseline />
          <ImpInformation />
          <Grid item sx={style.gridRight} xs={12} sm={12} md={6} square>
            <Box>
              <Typography sx={style.inboxHeading} variant="h2">
                Enter Verification Code
              </Typography>
              <Typography sx={style.inboxHeadingtwo} variant="h6">
                <i> Hint: Look for it in your Inbox</i>
              </Typography>
              <Box sx={style.formBox}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <OTPInputFields control={control} />
                  <Button
                    sx={style.GreenButton}
                    variant="contained"
                    type="submit"
                  >
                    <Typography variant="h6">Submit</Typography>
                  </Button>
                </form>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default EnterOtp;
