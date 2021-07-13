import React from "react";
import ChildFriendlyIcon from "@material-ui/icons/ChildFriendly";
import { Typography } from "@material-ui/core";

interface Props {
  getRandomWord: () => string;
  centerItem?: boolean;
  style: any;
}

export const Cell = (props: Props) => {
  const rows = [0, 1, 2, 3, 4].map((value) => {
    return value == 2 && props.centerItem ? (
      <td key={"iconcell_" + value} className={props.style.td}>
        <ChildFriendlyIcon
          key={"icon_" + value}
          color="primary"
          fontSize="large"
        />
      </td>
    ) : (
      <td key={"cell_" + value} className={props.style.td}>
        <Typography className={props.style.text}>
          {props.getRandomWord()}
        </Typography>
      </td>
    );
  });

  return <tr>{rows}</tr>;
};
