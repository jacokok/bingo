import {
  AppBar,
  Button,
  IconButton,
  Paper,
  Slider,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

interface Props {
  boardCount: number;
  setBoardCount: React.Dispatch<React.SetStateAction<number>>;
}

export const Config = (props: Props) => {
  return (
    <Paper style={{ padding: 20 }}>
      <Typography id="number-slider" gutterBottom>
        Number of items to render
      </Typography>
      <Slider
        defaultValue={1}
        aria-labelledby="number-slider"
        valueLabelDisplay="auto"
        min={1}
        onChange={(evt, newvalue) => props.setBoardCount(newvalue)}
      />
      <Button variant="contained" color="primary">
        Generate
      </Button>
    </Paper>
  );
};
