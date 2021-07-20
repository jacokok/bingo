import React from "react";
import pdf from "@react-pdf/renderer";
import { ChildFriendly } from "@material-ui/icons";
import { Icon, IconType } from "../Icons";

const { Text, View, Svg, G, Path } = pdf;

interface Props {
  // getRandomWord: () => string;
  rowNumber: number;
  style: any;
  color: string;
  getRandomWord: () => string;
  icon: IconType;
}

export const Cell = (props: Props) => {
  const cells = [0, 1, 2, 3, 4].map((value) => {
    return value == 2 && props.rowNumber == 2 ? (
      // Icon
      <View key={"cell_" + value} style={props.style.td}>
        <View style={{ margin: 10 }}>
          <Icon icon={props.icon} color={props.color} isPDF={true} />
        </View>
      </View>
    ) : (
      // </View>
      <View key={"cell_" + value} style={props.style.td}>
        <Text>{props.getRandomWord()}</Text>
      </View>
    );
  });

  return <React.Fragment>{cells}</React.Fragment>;
};
