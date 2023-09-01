import React, { useEffect } from "react";
import { Box, Container, Grid, TextField,} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { TimesheetStyle } from "./TimesheetStyle";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import TimePicker from "../Forms/CustomInputs/TimePicker";
import Dropdown from "../Forms/Dropdown/Dropdown";
import { useState } from "react";
import SubHeader from "../SubHeader/SubHeader";
import { format } from "date-fns";
import { dateOptions } from "../../utils/dateOptions";

const Timesheet = () => {
  const theme = useTheme();
  const style = TimesheetStyle(theme);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedValues, setSelectedValues] = useState({
    "Job Type": "",
    "Project Name": "",
    "Activity": "",
  });

  useEffect(() => {
    const currentDate = format(new Date(), "yyyy-MM-dd");
    setSelectedDate(currentDate);
  }, []);

  console.log("selectedValues", selectedValues);

  const jobType = [
    { label: "Job  1", value: "Job 1" },
    { label: "Job 2", value: "Job 2" },
    { label: "Job 3", value: "Job 3" },
  ];

  const projectName = [
    { label: "Project 1", value: "Project 1" },
    { label: "Project 2", value: "Project 2" },
    { label: "Project 3", value: "Project 3" },
  ];

  const activity = [
    { label: "Activity 1", value: "Activity 1" },
    { label: "Activity 2", value: "Activity 2" },
    { label: "Activity 3", value: "Activity 3" },
  ];

  const onChangeHandler = (event, dropdownName) => {
    const { value } = event.target;
    setSelectedValues((prevSelectedValues) => ({
      ...prevSelectedValues,
      [dropdownName]: value,
    }));
  };

  const handleDateChange = (event) => {
    const { value } = event.target;
    setSelectedDate(value);
    // Handle date change logic here
    console.log(event.target.value); // Selected date value
  };

  return (
    <Box>
     <SubHeader>
        <Dropdown
          options={dateOptions(3)} // Pass any additional options if needed
          value={selectedDate} // Pass the current selected value
          onChange={handleDateChange} // Pass the onChange function
          dropdownName="Date" // Pass the dropdown name
          style={{ ...style.TimesheetTextField, width: "15%" }} // Pass any additional style
        />
      </SubHeader>
    <Container
      style={{
        backgroundColor: "#fffff",
        marginTop: "2rem",
        border: "2px solid #008080",
      }}
    >
      <Grid container style={{ height: "100%" }}>
        <Grid
          item
          xs={12}
          sm={3}
          md={2}
          lg={2}
          sx={style.timesheetCol1}
          style={{
            padding: "20px 10px 25px 10px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <DemoContainer components={["MobileTimePicker"]}>
            <DemoItem>
              <TimePicker
                label="From Time"
                defaultValue={dayjs("2022-04-17T15:30")}
                sx={style.TimesheetTextField}
              />
            </DemoItem>
          </DemoContainer>
          <div style={{ marginTop: "10px" }}></div>
          <DemoContainer components={["MobileTimePicker"]}>
            <DemoItem>
              <TimePicker
                label="Till Time"
                defaultValue={dayjs("2022-04-17T15:30")}
                sx={style.TimesheetTextField}
              />
            </DemoItem>
          </DemoContainer>
        </Grid>
        <Grid
          item
          xs={12}
          sm={9}
          md={4}
          lg={4}
          sx={style.timesheetCol2}
          style={{
            padding: "20px 10px 25px 10px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ marginTop: "8px" }}></div>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
              <Dropdown
                options={jobType}
                value={selectedValues.jobType}
                onChange={onChangeHandler}
                dropdownName="Job Type"
                style={style.TimesheetTextField}
              />
              {/* <TextField
                label="Job Type"
                select
                fullWidth
                sx={style.TimesheetTextField}
                style={{ marginTop: "8px" }}
              >
                <MenuItem value="Type 1">Type 1</MenuItem>
                <MenuItem value="Type 2">Type 2</MenuItem>
                <MenuItem value="Type 3">Type 3</MenuItem>
              </TextField> */}
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Dropdown
                options={projectName}
                value={selectedValues.projectName}
                onChange={onChangeHandler}
                dropdownName="Project Name"
                style={style.TimesheetTextField}
              />
              <div style={{ marginTop: "18px" }}></div>
              {/* <TextField
                label="Project Name"
                select
                fullWidth
                sx={style.TimesheetTextField}
                style={{ marginTop: "8px" }}
              >
                <MenuItem value="Name 1">Name 1</MenuItem>
                <MenuItem value="Name 2">Name 2</MenuItem>
                <MenuItem value="Name 3">Name 3</MenuItem>
              </TextField> */}
            </Grid>
          </Grid>
          <Dropdown
            options={activity}
            value={selectedValues.activity}
            onChange={onChangeHandler}
            dropdownName="Activity"
            style={style.TimesheetTextField}
          />
          {/* <TextField
            label="Activity"
            select
            fullWidth
            style={{ marginTop: "18px" }}
            sx={style.TimesheetTextField}
          >
            <MenuItem value="Task 1">Task 1</MenuItem>
            <MenuItem value="Task 2">Task 2</MenuItem>
            <MenuItem value="Task 3">Task 3</MenuItem>
          </TextField> */}
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          sx={style.timesheetCol3}
          style={{
            padding: "20px 10px 25px 10px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextField
            label="What are you working on? (200 words max)"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            style={{ marginTop: "8px" }}
            sx={style.TimesheetTextField1}
            inputProps={{ maxLength: 200 }}
          />
        </Grid>
      </Grid>
    </Container>
    </Box>
  );
};

export default Timesheet;
