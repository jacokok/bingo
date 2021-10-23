import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Brightness3Icon from "@mui/icons-material/Brightness3";

interface Props {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Header = (props: Props) => {
  const toggleChecked = () => {
    props.setIsDark((prev: boolean) => !prev);
  };

  const darkModeToggle = props.isDark ? (
    <IconButton
      onClick={toggleChecked}
      size="small"
      sx={{ bgcolor: "primary.dark" }}
    >
      <WbSunnyIcon sx={{ color: "text.primary" }} />
    </IconButton>
  ) : (
    <IconButton
      onClick={toggleChecked}
      size="small"
      sx={{ bgcolor: "primary.light" }}
    >
      <Brightness3Icon sx={{ color: "text.primary" }} />
    </IconButton>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Buzzword Bingo
        </Typography>
        {darkModeToggle}
      </Toolbar>
    </AppBar>
  );
};
