import React from "react";
import { useTheme } from "@mui/material/styles";
import { InputLabel, TextField, Typography } from "@mui/material";
import useMobileScreen from "../../../customHooks/useMobileScreen";
import { InputFieldsStyle } from "./InputFieldsStyle";

const InputFields = ({
  label,
  type,
  name,
  inputProps,
  styling,
  value,
  error,
  onChange,
}) => {
  const mobile = useMobileScreen();

  const theme = useTheme();
  const style = InputFieldsStyle(theme);

  return (
    <>
      {styling ? (
        <InputLabel htmlFor="custom-input">
          <Typography color={mobile ? "black" : "secondary"}>
            {label}
          </Typography>
        </InputLabel>
      ) : (
        ""
      )}

      <TextField
        sx={styling ? style.loginTextField : ""}
        label={styling ? "" : label}
        type={type}
        value={value}
        name={name}
        onChange={(e) => onChange(e)}
        error={!!error}
        helperText={error}
        InputProps={inputProps}
      />
    </>
  );
};

export default InputFields;
