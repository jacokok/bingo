import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Slider,
  Typography,
} from "@material-ui/core";
import React from "react";
import { ColorPalette } from "material-ui-color";
import { ChildFriendly } from "@material-ui/icons";
import { DownloadButton } from "../board/download-button";
import ScrollDialog from "./scroll-dialog";

interface Props {
  boardCount: number;
  setBoardCount: React.Dispatch<React.SetStateAction<number>>;
  styles: any;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  words: Array<string>;
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

function debounce<Params extends any[]>(
  func: (...args: Params) => any,
  timeout: number
): (...args: Params) => void {
  let timer: NodeJS.Timeout;
  return (...args: Params) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}

export const Config = (props: Props) => {
  console.log("render config");
  const hangleColorChange = (newValue: string) => {
    props.setColor(palette[newValue]);
  };

  const handleSlider = (newvalue: number) => {
    props.setBoardCount(newvalue);
  };

  const debouncedTest = debounce(handleSlider, 400);

  return (
    <Card
      style={{ padding: 20, margin: "20px auto", maxWidth: 700 }}
      className={props.styles.hideprint}
    >
      <CardHeader title="Options" subheader="Change bingo config here" />
      <CardContent>
        <Typography id="number-slider" gutterBottom>
          Pick colour
        </Typography>
        <ColorPalette palette={palette} onSelect={hangleColorChange} />
        <br />
        <Typography id="number-slider" gutterBottom>
          Number of Bingo boards
        </Typography>
        <Slider
          defaultValue={1}
          aria-labelledby="number-slider"
          min={1}
          valueLabelDisplay="on"
          onChange={(evt, newvalue) =>
            debouncedTest(Array.isArray(newvalue) ? newvalue[0] : newvalue)
          }
        />
        <br />
        <ChildFriendly color="primary" fontSize="large" />
        <br />
        <ScrollDialog />
      </CardContent>
      <CardActions>
        <DownloadButton
          words={props.words}
          boardCount={props.boardCount}
          color={props.color}
        />
      </CardActions>
    </Card>
  );
};
