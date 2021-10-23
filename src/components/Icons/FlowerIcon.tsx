import React from "react";
import pdf from "@react-pdf/renderer";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";
const { Svg, G, Path } = pdf;

interface Props {
  color: string;
  isPDF: boolean;
  style?: any;
}

export const FlowerIcon = (props: Props) => {
  return props.isPDF ? (
    <Svg viewBox="0 0 24 24">
      <G fill={props.color}>
        <Path d="M 18.7 12.4 c -0.28 -0.16 -0.57 -0.29 -0.86 -0.4 c 0.29 -0.11 0.58 -0.24 0.86 -0.4 c 1.92 -1.11 2.99 -3.12 3 -5.19 c -1.79 -1.03 -4.07 -1.11 -6 0 c -0.28 0.16 -0.54 0.35 -0.78 0.54 c 0.05 -0.31 0.08 -0.63 0.08 -0.95 c 0 -2.22 -1.21 -4.15 -3 -5.19 C 10.21 1.85 9 3.78 9 6 c 0 0.32 0.03 0.64 0.08 0.95 c -0.24 -0.2 -0.5 -0.39 -0.78 -0.55 c -1.92 -1.11 -4.2 -1.03 -6 0 c 0 2.07 1.07 4.08 3 5.19 c 0.28 0.16 0.57 0.29 0.86 0.4 c -0.29 0.11 -0.58 0.24 -0.86 0.4 c -1.92 1.11 -2.99 3.12 -3 5.19 c 1.79 1.03 4.07 1.11 6 0 c 0.28 -0.16 0.54 -0.35 0.78 -0.54 c -0.05 0.32 -0.08 0.64 -0.08 0.96 c 0 2.22 1.21 4.15 3 5.19 c 1.79 -1.04 3 -2.97 3 -5.19 c 0 -0.32 -0.03 -0.64 -0.08 -0.95 c 0.24 0.2 0.5 0.38 0.78 0.54 c 1.92 1.11 4.2 1.03 6 0 c -0.01 -2.07 -1.08 -4.08 -3 -5.19 Z M 12 16 c -2.21 0 -4 -1.79 -4 -4 s 1.79 -4 4 -4 s 4 1.79 4 4 s -1.79 4 -4 4 Z"></Path>
      </G>
    </Svg>
  ) : (
    <FilterVintageIcon style={{ fontSize: 30, ...props.style }} />
  );
};
