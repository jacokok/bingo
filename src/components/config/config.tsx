import { Grid } from "@mui/material";
import React from "react";
import { Words } from "./Words";
import { IconType } from "../Icons";
import { PickColour } from "./PickColour";
import { BoardsNumber } from "./BoardsNumber";
import { ChooseIcon } from "./ChooseIcon";
import { Actions } from "./Actions";

interface Props {
  boardCount: number;
  setBoardCount: React.Dispatch<React.SetStateAction<number>>;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  words: Array<string>;
  setWords: React.Dispatch<React.SetStateAction<string[]>>;
  icon: IconType;
  setIcon: React.Dispatch<React.SetStateAction<IconType>>;
}

export const Config = (props: Props) => {
  return (
    <Grid item sm={6} xs={12} style={{ flexGrow: 1, margin: 20 }}>
      <PickColour setColor={props.setColor} />
      <BoardsNumber
        setBoardCount={props.setBoardCount}
        boardCount={props.boardCount}
      />
      <ChooseIcon
        color={props.color}
        icon={props.icon}
        onChange={props.setIcon}
      />
      <Words words={props.words} onChange={props.setWords} />
      <Actions
        words={props.words}
        boardCount={props.boardCount}
        color={props.color}
        icon={props.icon}
      />
    </Grid>
  );
};
