export const LoginStyle = (theme) => ({
  container: {
    display: "flex",
    padding: "1rem",
    height: "100vh",
    background: {
      xs: theme.palette.secondary.main,
      md: theme.palette.primary.main,
    },
    width: "100%",
    flexWrap: "wrap",
    overflowY: "scroll",
    justifyContent: "center",
    textAlign: "center",
  },
  mainBox: {
    paddingTop: "50px",
    paddingLeft: "20px",
    background: {
      xs: theme.palette.secondary.main,
      md: theme.palette.secondary.main,
    },
    flexDirection: "column",
    borderRadius: "50px",
    minWidth: "600px",
    width: { xs: "100%", sm: "100%", md: "50%" },
    textAlign: "center",
    display: { xs: "none", sm: "none", md: "flex" },
  },
  heading: {
    color: "primary.main",
  },
  quoteCommonBox: {
    m: "20px",
    display: "flex",
    gap: "1rem",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  quoteBox1: {
    borderTopLeftRadius: "50px",
    display: { xs: "none", sm: "block" },
    textAlign: "center",
    backgroundColor: "primary.main",
    p: "20px",
  },
  quoteBox2: {
    display: { xs: "none", sm: "block" },
    textAlign: "center",
    backgroundColor: "primary.main",
    p: "20px",
  },
  quoteBox3: {
    borderBottomLeftRadius: "50px",
    display: { xs: "none", sm: "block" },
    textAlign: "center",
    backgroundColor: "primary.main",
    p: "20px",
  },
  IWill: {
    color: "secondary.main",
  },
  quoteContainer: {
    textAlign: "left",
  },
  quoteText1: {
    fontWeight: "500",
    fontSize: "15px",
    opacity: ".8",
    color: "gray.main",
  },
  quoteText2: {
    fontWeight: "bold",
    fontSize: "15px",
    color: "black",
    opacity: "0.8",
  },
  quoteText3: {
    fontWeight: "800",
    fontSize: "15px",
    opacity: ".8",
    marginTop: "0.5rem",
    color: "gray.main",
  },
  quoteText4: {
    fontWeight: "800",
    fontSize: "15px",
    opacity: ".8",
    color: "gray.main",
  },
  // quoteText5:{
  //     fontWeight:"800",
  //     fontSize:"15px",
  //     color:"black",
  // },
  quoteBold: {
    fontSize: "15px",
    color: "black",
    fontWeight: "bold",
  },

  ////Login Form Section/////

  mainBoxRight: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: { xs: "black", md: theme.palette.secondary.main },
    gap: { xs: "1rem", md: "3rem" },
    width: { xs: "100%", md: "49%" },
  },
  logoBox: {
    maxWidth: "100%",
    width: "100%",
    height: "auto",
  },
  boxIWill: {
    display: {
      xs: "block",
      md: "none",
      borderTopRightRadius: "10px",
      borderTopLeftRadius: "10px",
      width: "90%",
      textAlign: "center",
    },
  },
  IWillMobile: {
    fontWeight: "bold",
  },

  inputOutsideBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: "1rem",
  },
  inputOutsideBoxText: {
    width: { xs: "90%", md: "60%" },
    textAlign: { xs: "center", md: "left" },
    color: { xs: "#0C1421", md: "#ffffff" },
  },
  formHeading: {
    fontWeight: "400",
    fontSize: "24px",
  },
  formHeading1: {
    fontWeight: "400",
    fontSize: "14px",
  },
  inputBox: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: { xs: "90%", md: "60%" },
    textAlign: { xs: "left", md: "left" },
  },
  fpDesktop: {
    textAlign: "right",
    color: theme.palette.secondary.main,
    textDecoration: "none",
  },
  fpMobile: {
    textAlign: "right",
    color: theme.palette.primary.main,
    textDecoration: "none",
  },
  signinButton: {
    borderRadius: "20px",
    padding: "10px",
    color: "secondary.main",
  },
  loginButtonMobile: {
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
  },
});
