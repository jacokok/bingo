import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

export const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">Buzzword Bingo</Typography>
    </Toolbar>
  </AppBar>
);
