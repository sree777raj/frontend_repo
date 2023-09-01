export const TimesheetStyle = (theme) => ({
  TimesheetTextField: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "20px",
      background: { xs: theme.palette.lightGray.main, md: "white" },
      fontSize: "15px",
    },

    "&  .MuiInputLabel-root": {
      backgroundColor: "#ffffff",
      borderRadius: "5px",
      // border: "1px solid gray",
      padding: "0px 5px",
      marginLeft: "-3px",
      marginTop: "0px",
      color: "#8897AD",
    },
  },
  TimesheetTextField1: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "20px",
      background: { xs: theme.palette.lightGray.main, md: "#DEE1E5" },
      color: "#000000",
    },

    "&  .MuiInputLabel-root": {
      backgroundColor: "#008080",
      borderRadius: "5px",
      border: "2px solid #ffffff",
      padding: "0px 5px",
      marginLeft: "-3px",
      marginTop: "2px",
      color: "#ffffff",
    },
  },
  timesheetCol1: {
    maxWidth: { md: "15%", lg: "12%" },
  },
  timesheetCol2: {
    minWidth: { md: "35%", lg: "38%" },
  },
  // timesheetCol3: {
  //   maxWidth: {  md: "50%",lg:"50%", },
  // },
});
