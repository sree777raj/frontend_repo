import { useTheme } from "@mui/material/styles";
import { SubHeaderStyle } from "./SubHeaderStyle";
import { Container } from "@mui/material";

const SubHeader = ({ children }) => {
  const theme = useTheme();
  const style = SubHeaderStyle(theme);

  return <Container style={style.subHeader_container}>{children}</Container>;
};

export default SubHeader;
