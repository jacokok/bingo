import React from "react";
import {
  BabyIcon,
  FlowerIcon,
  CoffeeIcon,
  BingoIcon,
  CrossIcon,
  IconType,
} from "./index";

interface Props {
  color: string;
  icon: IconType;
  isPDF: boolean;
  style?: any;
}

export const Icon = (props: Props) => {
  const getIconButton = () => {
    switch (props.icon) {
      case "baby":
        return (
          <BabyIcon
            color={props.color}
            isPDF={props.isPDF}
            style={props.style}
          />
        );
      case "flower":
        return (
          <FlowerIcon
            color={props.color}
            isPDF={props.isPDF}
            style={props.style}
          />
        );
      case "coffee":
        return (
          <CoffeeIcon
            color={props.color}
            isPDF={props.isPDF}
            style={props.style}
          />
        );
      case "cross":
        return (
          <CrossIcon
            color={props.color}
            isPDF={props.isPDF}
            style={props.style}
          />
        );
      default:
        return (
          <BingoIcon
            color={props.color}
            isPDF={props.isPDF}
            style={props.style}
          />
        );
    }
  };

  return <React.Fragment>{getIconButton()}</React.Fragment>;
};
