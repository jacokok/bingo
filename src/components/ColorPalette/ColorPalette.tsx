import React from "react";
import { Box } from "@mui/material";
import { ColorButton } from ".";

interface Props {
  palette: Record<string, string>;
  onSelect: (newValue: string) => void;
}

export const ColorPalette = ({ palette, onSelect }: Props) => {
  return (
    <Box>
      {Object.keys(palette).map((name) => (
        <ColorButton
          key={`${name}`}
          color={palette[name]}
          tooltip={name}
          onClick={() => onSelect(name)}
        />
      ))}
    </Box>
  );
};
