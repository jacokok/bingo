import React, { useState } from "react";
import { Cell } from "./cell";
import "./board.css";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";

interface Props {
  words: Array<string>;
  isBreak: boolean;
}

export const Board = (props: Props) => {
  const existing: any = [];

  const getRandomWord = () => {
    var retry = 0;
    var word = props.words[Math.floor(Math.random() * props.words.length)];
    while (existsInArray(word) && retry < 10000) {
      word = props.words[Math.floor(Math.random() * props.words.length)];
      retry++;
    }
    existing.push(word);
    return word;
  };

  const existsInArray = (val: any) => {
    for (var i = 0; i <= existing.length; i++) {
      if (existing[i] == val) {
        return true;
      }
    }
    return false;
  };

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

  const rows = [0, 1, 2, 3, 4].map((value) => {
    return (
      <Cell
        key={"row_" + value}
        getRandomWord={getRandomWord}
        centerItem={value == 2}
        style={classes}
      />
    );
  });

  return (
    <div className={classes.container}>
      <table className={classes.table}>
        <thead>
          <tr>
            <td className={classes.td}>
              <Typography className={classes.header}>B</Typography>
            </td>
            <td className={classes.td}>
              <Typography className={classes.header}>I</Typography>
            </td>
            <td className={classes.td}>
              <Typography className={classes.header}>N</Typography>
            </td>
            <td className={classes.td}>
              <Typography className={classes.header}>G</Typography>
            </td>
            <td className={classes.td}>
              <Typography className={classes.header}>O</Typography>
            </td>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      {props.isBreak ? <div style={{ pageBreakAfter: "always" }}></div> : null}
    </div>
  );
};
