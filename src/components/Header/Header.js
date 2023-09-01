import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { useTheme } from "@mui/material/styles";
import { HeaderStyle } from "./HeaderStyle";

const Header = ({ anchorEl, open, handleMenuOpen, handleMenuClose }) => {
  const theme = useTheme();
  const style = HeaderStyle(theme);

  return (
    <>
      <IconButton
        onClick={handleMenuOpen}
        color="inherit"
        sx={{
          display: {
            xs: "none",
            sm: "block",
            marginLeft: "auto",
          },
        }}
      >
        <Avatar sx={{ width: 32, height: 32 }}>
          <AccountCircleIcon />
        </Avatar>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}

        style={style.menuHover}
      >
        <MenuItem onClick={handleMenuClose} style={style.menuColour}>
          Profile{" "}
          <ListItemIcon>
            <AccountCircleIcon style={style.menuColour} />
          </ListItemIcon>
        </MenuItem>
        <MenuItem onClick={handleMenuClose} style={style.menuColour}>
          Logout{" "}
          <ListItemIcon>
            <ExitToAppIcon style={style.menuColour}/>
          </ListItemIcon>
        </MenuItem>
      </Menu>
    </>
  );
};

export default Header;
