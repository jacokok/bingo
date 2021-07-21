import React from "react";
import "./board.css";
import { useTheme } from "@material-ui/core/styles";
import { Preview } from "./Previews";
import { IconType } from "../Icons";

interface Props {
  words: Array<string>;
  boardCount: number;
  icon: IconType;
}

export const Board = (props: Props) => {
  const theme = useTheme();
  return (
    <React.Fragment>
      <Preview
        words={props.words}
        color={theme.palette.primary.main}
        icon={props.icon}
      />
    </React.Fragment>
  );
};
