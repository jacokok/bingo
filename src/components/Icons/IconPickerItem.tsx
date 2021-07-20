import React from "react";
import { IconType } from "./index";
import { Icon } from "./Icon";

interface Props {
  color: string;
  icon: IconType;
  isSelected: boolean;
}

export const IconPickerItem = (props: Props) => {
  return <Icon color={props.color} icon={props.icon} isPDF={false}></Icon>;
};
