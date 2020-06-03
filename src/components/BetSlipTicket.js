import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  IconButton,
} from "@material-ui/core";

import { Close } from "@material-ui/icons";

import { CANCEL_BET } from "../common/actions.js"

import styles from "../assets/js/components/betSlipTicketStyle.js";

const useStyles = makeStyles(styles);

export default function BetSlipTicket(props) {
  const {
    dispatch,
    gameIndex,
    hostTeamName,
    hostTeamImg,
    guestTeamName,
    guestTeamImg,
    selectedTeam,
    selectedBet
  } = props;

  const classes = useStyles();

  const closeCard = () => {
    dispatch({ type: CANCEL_BET, gameIndex: gameIndex, betType: selectedTeam })
  }

  return (
    <div className={classes.container}>
      <IconButton className={classes.btnClose} aria-label="close" size="small" onClick={closeCard}>
        <Close fontSize="inherit" />
      </IconButton>
      <div className={classes.hostTeam}>
        <div className={classes.teamLogoItem}>
          <img
            src={hostTeamImg}
            alt="host-team"
            className={classes.teamLogoImg}
          />
        </div>
        <p className={classes.hostTeamName}>{hostTeamName}</p>
      </div>
      <div className={classes.guestTeam}>
        <div className={classes.teamLogoItem}>
          <img
            src={guestTeamImg}
            alt="guest-team"
            className={classes.teamLogoImg}
          />
        </div>
        <p className={classes.guestTeamName}>{guestTeamName}</p>
      </div>
      <div className={classes.price}>
        <p className={classes.selectedTeam}>
          {
            selectedTeam === "handicap_0"
              ? hostTeamName
              : selectedTeam === "handicap_1"
                ? guestTeamName
                : selectedTeam
          }
        </p>
        <p className={classes.selectedBet}>{selectedBet}</p>
      </div>
      <div className={classes.stakeWin}>
        <input
          className={classes.inputStake}
          placeholder="Stake"
        />
        <input
          className={classes.inputWin}
          placeholder="Win"
        />
      </div>
    </div>
  );
}


