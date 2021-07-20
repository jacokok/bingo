import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness3Icon from "@material-ui/icons/Brightness3";

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
      style={{
        backgroundColor: "#ff6e00",
      }}
    >
      <WbSunnyIcon color="primary" />
    </IconButton>
  ) : (
    <IconButton
      onClick={toggleChecked}
      size="small"
      style={{
        backgroundColor: "#303234",
      }}
    >
      <Brightness3Icon color="primary" />
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
