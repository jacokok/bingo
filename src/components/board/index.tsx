import React, { useState } from "react";
import { Cell } from "./cell";
import "./board.css";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";

import { Preview } from "./preview";
import { PDFDocument } from "./document";
import { DownloadButton } from "./download-button";

interface Props {
  words: Array<string>;
  boardCount: number;
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
      <Preview words={props.words} color={theme.palette.primary.main} />
    </React.Fragment>
  );
};
