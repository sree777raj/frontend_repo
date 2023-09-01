import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { InputLabel } from "@mui/material";

const Dropdown = ({ options, value, onChange, dropdownName, style }) => {
  const handleDropdownChange = (event) => {
    onChange(event, dropdownName);
  };

  return (
    <FormControl sx={style} fullWidth>
      <InputLabel id="demo-simple-select-label">{dropdownName}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        value={value}
        label={dropdownName}
        onChange={handleDropdownChange}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
