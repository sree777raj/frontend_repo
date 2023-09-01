import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";


const TimePicker = ({ label, defaultValue, sx }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileTimePicker label={label} defaultValue={defaultValue} sx={sx} />
    </LocalizationProvider>
  );
};

export default TimePicker;