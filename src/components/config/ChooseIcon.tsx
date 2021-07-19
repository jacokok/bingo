import { Card, CardHeader, CardContent, Button } from "@material-ui/core";
import React from "react";
import { IconPicker, IconType } from "../Icons";

interface Props {
  color: string;
  icon: IconType;
  onChange: React.Dispatch<React.SetStateAction<IconType>>;
}

export const ChooseIcon = (props: Props) => {
  return (
    <Card style={{ marginBottom: 20 }}>
      <CardHeader subheader="3. Choose Icon" />
      <CardContent>
        <IconPicker
          color={props.color}
          icon={props.icon}
          setIcon={props.onChange}
        />
      </CardContent>
    </Card>
  );
};
