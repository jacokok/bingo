import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

interface Props {
  styles: any;
}

export const Header = (props: Props) => (
  <AppBar position="static" className={props.styles.hideprint}>
    <Toolbar>
      <Typography variant="h6">Buzzword Bingo</Typography>
    </Toolbar>
  </AppBar>
);
