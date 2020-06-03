import React, { useState, useReducer } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Grid,
  Button,
  Hidden,
  Modal,
  Fade,
} from "@material-ui/core";

import reducer from "../../common/reducer.js"
import SideBar from "../../components/SideBar.js"
import BettingBoard from "../../components/BettingBoard.js"
import BetSlip from "../../components/BetSlip.js"

import styles from "../../assets/js/pages/MainBetLive/mainBetLivePageStyle.js";

const useStyles = makeStyles(styles);

const initialState = {
  slipsCounter: 0,
  betGames: [],
};

export default function MainBetLive(props) {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState)
  const { betGames, slipsCounter } = state;
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <div className={classes.container + " mb-3"}>
      <Grid container>
        <SideBar />
        <div className="col-12 col-lg-7 col-xl-8 mb-3 mb-lg-0">
          <div className={classes.mainBetBoard + " ml-lg-3"}>
            <div className={classes.mainBetHeader}>
              <div className={classes.scoreBoard + " flex-column flex-sm-row"}>
                <p className={classes.teamName + " m-0"}>Mitteldeutscher BC</p>
                <div className={classes.gameScore}>
                  <p className={classes.scoreValue + " mb-0"}>4</p>
                  <p className={classes.scoreValue + " mb-0 mx-3"}>:</p>
                  <p className={classes.scoreValue + " mb-0"}>0</p>
                </div>
                <p className={classes.teamName + " m-0"}>Rasta Vechta</p>
              </div>
              <div className={classes.timeBoard}>
                <p className={classes.liveTime + " mb-0"}>
                  Live
                <span className="ml-4">1H  - 12'</span>
                </p>
              </div>
            </div>
            <BettingBoard dispatch={dispatch} />
          </div>
        </div>
        <Hidden smDown>
          <div className={classes.betSlip + " col-lg-4 offset-lg-0 col-xl-3 d-none d-lg-block"}>
            <BetSlip dispatch={dispatch} betGames={betGames} slipsCounter={slipsCounter} />
          </div>
        </Hidden>
      </Grid>
      <Hidden mdUp>
        <Grid container justify="center">
          {
            slipsCounter !== 0
              ?
              <>
                <Button
                  variant="outlined"
                  className={classes.btnBetSlip}
                  onClick={handleOpen}
                >
                  bet slip
                <span className={classes.slipsCounter}>{slipsCounter}</span>
                </Button>
                <Modal
                  open={modalOpen}
                  onClose={handleClose}
                  className={classes.modal}
                  aria-labelledby="bet-slip-title"
                  aria-describedby="bet-slip-description"
                >
                  <Fade in={modalOpen}>
                    <div className={classes.betSlip}>
                      <BetSlip dispatch={dispatch} betGames={betGames} slipsCounter={slipsCounter} />
                    </div>
                  </Fade >
                </Modal>
              </>
              : <></>
          }
        </Grid>
      </Hidden>
    </div>
  );
}


