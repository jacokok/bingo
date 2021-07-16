import React from "react";
import pdf from "@react-pdf/renderer";

const { Text, View } = pdf;

interface Props {
  // getRandomWord: () => string;
  rowNumber: number;
  style: any;
  getRandomWord: () => string;
}

export const Cell = (props: Props) => {
  const cells = [0, 1, 2, 3, 4].map((value) => {
    return value == 2 && props.rowNumber == 2 ? (
      // Icon
      <View key={"cell_" + value} style={props.style.td}>
        <Text>Bingo</Text>
      </View>
    ) : (
      <View key={"cell_" + value} style={props.style.td}>
        <Text>{props.getRandomWord()}</Text>
      </View>
    );
  });

  return <React.Fragment>{cells}</React.Fragment>;
};
