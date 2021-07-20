import { Card, CardHeader, CardContent } from "@material-ui/core";
import { ColorPalette } from "material-ui-color";
import React from "react";

interface Props {
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

export const PickColour = (props: Props) => {
  const hangleColorChange = (newValue: string) => {
    props.setColor(palette[newValue]);
  };

  return (
    <Card style={{ marginBottom: 20 }}>
      <CardHeader subheader="1. Pick Colour" />
      <CardContent>
        <ColorPalette palette={palette} onSelect={hangleColorChange} />
      </CardContent>
    </Card>
  );
};
