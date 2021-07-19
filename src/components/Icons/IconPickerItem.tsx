import React from "react";
import {
  BabyIcon,
  FlowerIcon,
  BingoIcon,
  CrossIcon,
  CoffeeIcon,
  IconType,
} from "./index";
import CSS from "csstype";
import FilterVintageIcon from "@material-ui/icons/FilterVintage";
import CloseIcon from "@material-ui/icons/Close";
import LocalCafeIcon from "@material-ui/icons/LocalCafe";
import CasinoIcon from "@material-ui/icons/Casino";
import { ChildFriendly } from "@material-ui/icons";
import { Button, ButtonGroup, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { emphasize } from "@material-ui/core/styles/colorManipulator";

interface Props {
  color: string;
  icon: IconType;
  isSelected: boolean;
}

export const IconPickerItem = (props: Props) => {
  const useStyles = makeStyles({
    icon: {
      fontSize: 30,
    },
    activeIcon: {
      fontSize: 30,
      color: "white",
    },
  });
  const classes = useStyles();

  const getIconButton = () => {
    switch (props.icon) {
      case "baby":
        return (
          <ChildFriendly
            className={props.isSelected ? classes.activeIcon : classes.icon}
            color="primary"
          />
        );
      case "flower":
        return (
          <FilterVintageIcon
            className={props.isSelected ? classes.activeIcon : classes.icon}
            color="primary"
          />
        );
      case "coffee":
        return (
          <LocalCafeIcon
            className={props.isSelected ? classes.activeIcon : classes.icon}
            color="primary"
          />
        );
      case "cross":
        return (
          <CloseIcon
            className={props.isSelected ? classes.activeIcon : classes.icon}
            color="primary"
          />
        );
      default:
        return (
          <CasinoIcon
            className={props.isSelected ? classes.activeIcon : classes.icon}
            color="primary"
          />
        );
    }
  };

  return <React.Fragment>{getIconButton()}</React.Fragment>;
};
