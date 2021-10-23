import { Card, CardHeader, CardContent, Slider } from "@mui/material";
import React from "react";
import { debounce } from "../../utils/utils";

interface Props {
  boardCount: number;
  setBoardCount: React.Dispatch<React.SetStateAction<number>>;
}

export const BoardsNumber = (props: Props) => {
  const handleSlider = (newvalue: number) => {
    props.setBoardCount(newvalue);
  };

  const debouncedBoardNumber = debounce(handleSlider, 400);

  return (
    <Card style={{ marginBottom: 20 }}>
      <CardHeader subheader="2. Number of Bingo's to create" />
      <CardContent>
        <Slider
          key={`slider-${props.boardCount}`}
          defaultValue={props.boardCount}
          aria-labelledby="number-slider"
          min={1}
          valueLabelDisplay="on"
          onChange={(evt, newvalue) =>
            debouncedBoardNumber(
              Array.isArray(newvalue) ? newvalue[0] : newvalue
            )
          }
        />
      </CardContent>
    </Card>
  );
};
