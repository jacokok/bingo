import React from "react";
import { Button, Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material";

interface Props {
  color: string;
  tooltip: string;
  onClick: () => void;
}

export const ColorButton = ({ color, tooltip, onClick }: Props) => {
  const theme = useTheme();

  const border = "2px solid " + theme.palette.primary.light;

  const MyColorButton = styled(Button)({
    width: 24,
    height: 24,
    margin: 4,
    padding: 0,
    bgcolor: color,
    minWidth: 24,
    border: theme.palette.primary.main == color ? border : undefined,
  });

  return (
    <Tooltip title={tooltip}>
      <MyColorButton sx={{ bgcolor: color }} onClick={onClick}></MyColorButton>
    </Tooltip>
  );
};
