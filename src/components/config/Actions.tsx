import { Card, CardHeader, CardContent } from "@material-ui/core";
import React from "react";
import { DownloadButton } from "../board/DownloadButton";
import { IconType } from "../Icons";

interface Props {
  words: Array<string>;
  boardCount: number;
  color: string;
  icon: IconType;
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
          icon={props.icon}
        />
      </CardContent>
    </Card>
  );
};
