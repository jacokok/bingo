import React from "react";
import pdf from "@react-pdf/renderer";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
const { Svg, G, Path } = pdf;

interface Props {
  color: string;
  isPDF: boolean;
  style?: any;
}

export const CoffeeIcon = (props: Props) => {
  return props.isPDF ? (
    <Svg viewBox="0 0 24 24">
      <G fill={props.color}>
        <Path d="M 20 3 H 4 v 10 c 0 2.21 1.79 4 4 4 h 6 c 2.21 0 4 -1.79 4 -4 v -3 h 2 c 1.11 0 2 -0.9 2 -2 V 5 c 0 -1.11 -0.89 -2 -2 -2 Z m 0 5 h -2 V 5 h 2 v 3 Z M 4 19 h 16 v 2 H 4 Z"></Path>
      </G>
    </Svg>
  ) : (
    <LocalCafeIcon style={{ fontSize: 30, ...props.style }} />
  );
};
