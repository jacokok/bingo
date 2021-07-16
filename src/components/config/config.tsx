import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControlLabel,
  IconButton,
  Paper,
  Slider,
  Switch,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import {
  Color,
  ColorBox,
  ColorButton,
  ColorPalette,
  ColorPicker,
} from "material-ui-color";

interface Props {
  boardCount: number;
  setBoardCount: React.Dispatch<React.SetStateAction<number>>;
  styles: any;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}

const palette = {
  red: "#f44336",
  pink: "#e91e63",
  purple: "#9c27b0",
  indigo: "#3f51b5",
  blue: "#2196f3",
  lightBlue: "#03a9f4",
  cyan: "#00bcd4",
  teal: "#009688",
  green: "#4caf50",
  lightGreen: "#8bc34a",
  amber: "#ffc107",
  orange: "#ff9800",
  deepOrange: "#ff5722",
  dark: "#1b1d1e",
} as Record<string, string>;

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

export const Config = (props: Props) => {
  const hangleColorChange = (newValue: string) => {
    props.setColor(palette[newValue]);
  };

  return (
    <Card
      style={{ padding: 20, margin: "20px auto", maxWidth: 700 }}
      className={props.styles.hideprint}
    >
      <CardHeader title="Options" subheader="Change bingo config here" />
      <CardContent>
        <FormControlLabel
          control={
            <Switch
              // checked={state.checkedA}
              // onChange={handleChange}
              color="primary"
              name="checkedA"
            />
          }
          label="Solid Header"
        />
        <ColorPalette palette={palette} onSelect={hangleColorChange} />
        <Typography id="number-slider" gutterBottom>
          Number of Bingo boards to render
        </Typography>
        <Slider
          defaultValue={1}
          aria-labelledby="number-slider"
          valueLabelDisplay="auto"
          min={1}
          onChange={(evt, newvalue) =>
            props.setBoardCount(
              Array.isArray(newvalue) ? newvalue[0] : newvalue
            )
          }
        />
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          onClick={() => window.print()}
        >
          Print
        </Button>
      </CardActions>
    </Card>
  );
};
