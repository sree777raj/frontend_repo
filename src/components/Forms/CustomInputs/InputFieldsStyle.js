export const InputFieldsStyle = (theme) => ({
  loginTextField: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "20px",
      background: { xs: theme.palette.lightGray.main, md: "white" },
      "&.Mui-focused fieldset": {
        border: "none",
      },
      "&:hover fieldset": {
        border: "none",
      },
    },
  },
});
