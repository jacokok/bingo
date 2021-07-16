import React from "react";
import pdf from "@react-pdf/renderer";
import { Cell } from "./cell";

const { Text, View } = pdf;

interface Props {
  // words: Array<string>;
  // boardCount: number;
  style: any;
  color: string;
  getRandomWord: () => string;
}

export const Row = (props: Props) => {
  const docRows = [0, 1, 2, 3, 4].map((value) => {
    return (
      <View key={"cell_" + value} style={props.style.row}>
        <Cell
          style={props.style}
          rowNumber={value}
          getRandomWord={props.getRandomWord}
          color={props.color}
        />
      </View>
    );
  });
  return <React.Fragment>{docRows}</React.Fragment>;
};
