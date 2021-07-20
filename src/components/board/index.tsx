import React, { useState } from "react";
import { Cell } from "./Cell";
import "./board.css";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";

import { Preview } from "./Preview";
import { PDFDocument } from "./Document";
import { DownloadButton } from "./DownloadButton";
import { IconType } from "../Icons";

interface Props {
  words: Array<string>;
  boardCount: number;
  icon: IconType;
}

export const Board = (props: Props) => {
  const theme = useTheme();
  const useStyles = makeStyles({
    header: {
      fontSize: 50,
      color: theme.palette.primary.main,
      height: 60,
      lineHeight: "60px",
    },
    text: {
      color: theme.palette.primary.main,
    },
    td: {
      border: "2px solid " + theme.palette.primary.main,
    },
    container: {
      margin: "20px auto",
    },
    table: {
      margin: "auto",
    },
  });

  const classes = useStyles();

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
