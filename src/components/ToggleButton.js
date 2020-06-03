import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
} from "@material-ui/core";

import { CLICK_BET, CANCEL_BET } from "../common/actions.js"

import styles from "../assets/js/components/toggleButtonStyle.js";

const useStyles = makeStyles(styles);

export default function ToggleButton(props) {
  const { dispatch, className, gameIndex, bet } = props;
  const classes = useStyles();

  const handleChange = () => {
    bet.status === false 
      ? dispatch({ type: CLICK_BET, gameIndex: gameIndex, betType: bet.type })
      : dispatch({ type: CANCEL_BET, gameIndex: gameIndex, betType: bet.type })
  }

  return (
    <Button
      className={
        className === undefined
          ?
          bet.status ? classes.active : classes.inactive
          :
          bet.status ? classes.active + " " + className : classes.inactive + " " + className
      }
      onClick={handleChange}
    >
      {bet.value}
    </Button>
  );
}


