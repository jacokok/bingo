import React from "react";
import { IconType, icons } from "../Icons/index";
import { Button, ButtonGroup, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { IconPickerItem } from "./IconPickerItem";

interface Props {
  color: string;
  icon: IconType;
  setIcon: React.Dispatch<React.SetStateAction<IconType>>;
}

export const IconPicker = (props: Props) => {
  const theme = useTheme();

  const iconPickerItems = icons.map((icon: IconType, i: number) => {
    const MyIconButton = styled(Button)({
      backgroundColor:
        props.icon == icon ? props.color : theme.palette.background.default,
      color: props.icon != icon ? props.color : undefined,
    });

    return (
      <MyIconButton key={icon} onClick={() => props.setIcon(icon)}>
        <IconPickerItem
          color={props.color}
          icon={icon}
          isSelected={props.icon == icon}
        />
      </MyIconButton>
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
