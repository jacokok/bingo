import React from "react";
import pdf from "@react-pdf/renderer";
import { Cell } from "./Cell";
import { IconType } from "../Icons";

const { View } = pdf;

interface Props {
  style: any;
  color: string;
  getRandomWord: () => string;
  icon: IconType;
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
          icon={props.icon}
        />
      </View>
    );
  });
  return <React.Fragment>{docRows}</React.Fragment>;
};
