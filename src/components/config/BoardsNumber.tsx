import {
  Card,
  CardHeader,
  CardContent,
  Button,
  Slider,
} from "@material-ui/core";
import React from "react";
import { debounce } from "../../utils/utils";

interface Props {
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
          defaultValue={10}
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
