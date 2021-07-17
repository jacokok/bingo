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
  setIsPreview: React.Dispatch<React.SetStateAction<boolean>>;
  isPreview: boolean;
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

  const getProps = async () => {
    return props;
  };

  // const rows = [0, 1, 2, 3, 4].map((value) => {
  //   return (
  //     <Cell
  //       key={"row_" + value}
  //       getRandomWord={getRandomWord}
  //       centerItem={value == 2}
  //       style={classes}
  //     />
  //   );
  // });

  // const boards = [...Array(boardCount)].map((e, i) => {
  //   return <Board key={"boards_" + i} words={words} />;
  // });

  // Create styles

  // const docRows = [0, 1, 2, 3, 4].map((value) => {
  //   return (
  //     <View key={"row_" + value} style={docStyles.td}>
  //       <Text>{getRandomWord()}</Text>
  //     </View>
  //   );
  // });

  return (
    <React.Fragment>
      <Preview />
      <DownloadButton
        words={props.words}
        boardCount={props.boardCount}
        color={theme.palette.primary.main}
      />
    </React.Fragment>
  );
};
