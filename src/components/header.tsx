import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";

export const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">Buzzword Bingo</Typography>
    </Toolbar>
  </AppBar>
);
