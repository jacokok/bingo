import React from "react";
import { IconType, icons } from "../Icons/index";
import { Button, ButtonGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { IconPickerItem } from "./IconPickerItem";

interface Props {
  color: string;
  icon: IconType;
  setIcon: React.Dispatch<React.SetStateAction<IconType>>;
}

export const IconPicker = (props: Props) => {
  const useStyles = makeStyles({
    iconButton: {
      backgroundColor: "white",
    },
    activeIconButton: {
      backgroundColor: props.color,
    },
  });
  const classes = useStyles();

  const iconPickerItems = icons.map((icon: IconType, i: number) => {
    return (
      <Button
        key={icon}
        className={
          icon == props.icon ? classes.activeIconButton : classes.iconButton
        }
        onClick={() => props.setIcon(icon)}
      >
        <IconPickerItem
          color={props.color}
          icon={icon}
          isSelected={props.icon == icon}
        />
      </Button>
    );
  });

  return (
    <React.Fragment>
      <ButtonGroup variant="contained" color="primary">
        {iconPickerItems}
      </ButtonGroup>
    </React.Fragment>
  );
};
