import React from "react";
import pdf from "@react-pdf/renderer";
import CloseIcon from "@material-ui/icons/Close";
const { Svg, G, Path } = pdf;

interface Props {
  color: string;
  isPDF: boolean;
  style?: any;
}

export const CrossIcon = (props: Props) => {
  return props.isPDF ? (
    <Svg viewBox="0 0 24 24">
      <G fill={props.color}>
        <Path d="M 19 6.41 L 17.59 5 L 12 10.59 L 6.41 5 L 5 6.41 L 10.59 12 L 5 17.59 L 6.41 19 L 12 13.41 L 17.59 19 L 19 17.59 L 13.41 12 Z"></Path>
      </G>
    </Svg>
  ) : (
    <CloseIcon style={{ fontSize: 30, ...props.style }} />
  );
};
