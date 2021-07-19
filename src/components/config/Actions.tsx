import {
  Card,
  CardHeader,
  CardContent,
  Button,
  CardActions,
} from "@material-ui/core";
import React from "react";
import { DownloadButton } from "../board/download-button";

interface Props {
  words: Array<string>;
  boardCount: number;
  color: string;
}

export const Actions = (props: Props) => {
  return (
    <Card style={{ marginBottom: 20 }}>
      <CardHeader subheader="5. Download" />
      <CardContent>
        <DownloadButton
          words={props.words}
          boardCount={props.boardCount}
          color={props.color}
        />
      </CardContent>
    </Card>
  );
};
