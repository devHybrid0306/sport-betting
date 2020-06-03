import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
} from "@material-ui/core";

import { CLICK_BET, CANCEL_BET } from "../common/actions.js"

import styles from "../assets/js/components/betButtonStyle.js";

const useStyles = makeStyles(styles);

export default function BetButton(props) {
  const { dispatch, betName, betValue } = props;
  const classes = useStyles();
  const [active, setActive] = useState(false);

  const handleChange = () => {
    setActive(!active);
    active === false
      ? dispatch({ type: CLICK_BET })
      : dispatch({ type: CANCEL_BET })
  }

  return (
    <div className=" col-12 col-sm-6">
      <Button
        className={classes.btnBet}
        onClick={handleChange}
      >
        {betName}
        <span className={classes.betValue + " float-right"}>{betValue}</span>
      </Button>
    </div>
  );
}


