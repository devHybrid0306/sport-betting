import React, { useState } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from 'reactstrap';

import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
} from "@material-ui/core";

import BetSlipTicket from "./BetSlipTicket.js";

import styles from "../assets/js/components/betSlipStyle.js";

const useStyles = makeStyles(styles);

export default function BetSlip(props) {
  const { dispatch, betGames, slipsCounter } = props;
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState('1');

  const tickets = betGames.map((betGame) => {
    return (
      <div key={betGame.index}>
        {
          betGame.bet1X.status
            ?
            <BetSlipTicket
              dispatch={dispatch}
              gameIndex={betGame.index}
              hostTeamName={betGame.hostTeamName}
              hostTeamImg={betGame.hostTeamImg}
              guestTeamName={betGame.guestTeamName}
              guestTeamImg={betGame.guestTeamImg}
              selectedTeam={betGame.bet1X.type}
              selectedBet={betGame.bet1X.value}
            />
            : null
        }
        {
          betGame.betX.status
            ?
            <BetSlipTicket
              dispatch={dispatch}
              gameIndex={betGame.index}
              hostTeamName={betGame.hostTeamName}
              hostTeamImg={betGame.hostTeamImg}
              guestTeamName={betGame.guestTeamName}
              guestTeamImg={betGame.guestTeamImg}
              selectedTeam={betGame.betX.type}
              selectedBet={betGame.betX.value}
            />
            : null
        }
        {
          betGame.bet2X.status
            ?
            <BetSlipTicket
              dispatch={dispatch}
              gameIndex={betGame.index}
              hostTeamName={betGame.hostTeamName}
              hostTeamImg={betGame.hostTeamImg}
              guestTeamName={betGame.guestTeamName}
              guestTeamImg={betGame.guestTeamImg}
              selectedTeam={betGame.bet2X.type}
              selectedBet={betGame.bet2X.value}
            />
            : null
        }
        {
          betGame.handicap_0.status
            ?
            <BetSlipTicket
              dispatch={dispatch}
              gameIndex={betGame.index}
              hostTeamName={betGame.hostTeamName}
              hostTeamImg={betGame.hostTeamImg}
              guestTeamName={betGame.guestTeamName}
              guestTeamImg={betGame.guestTeamImg}
              selectedTeam={betGame.handicap_0.type}
              selectedBet={betGame.handicap_0.value}
            />
            : null
        }
        {
          betGame.handicap_1.status
            ?
            <BetSlipTicket
              dispatch={dispatch}
              gameIndex={betGame.index}
              hostTeamName={betGame.hostTeamName}
              hostTeamImg={betGame.hostTeamImg}
              guestTeamName={betGame.guestTeamName}
              guestTeamImg={betGame.guestTeamImg}
              selectedTeam={betGame.handicap_1.type}
              selectedBet={betGame.handicap_1.value}
            />
            : null
        }
        {
          betGame.over.status
            ?
            <BetSlipTicket
              dispatch={dispatch}
              gameIndex={betGame.index}
              hostTeamName={betGame.hostTeamName}
              hostTeamImg={betGame.hostTeamImg}
              guestTeamName={betGame.guestTeamName}
              guestTeamImg={betGame.guestTeamImg}
              selectedTeam={betGame.over.type}
              selectedBet={betGame.over.value}
            />
            : null
        }
        {
          betGame.under.status
            ?
            <BetSlipTicket
              dispatch={dispatch}
              gameIndex={betGame.index}
              hostTeamName={betGame.hostTeamName}
              hostTeamImg={betGame.hostTeamImg}
              guestTeamName={betGame.guestTeamName}
              guestTeamImg={betGame.guestTeamImg}
              selectedTeam={betGame.under.type}
              selectedBet={betGame.under.value}
            />
            : null
        }
      </div>
    )
  });

  return (
    <div className={classes.card}>
      <div>
        <h2 className={classes.cardHeaderLabel}>bet slip</h2>
        <Nav tabs className={classes.tabMenu}>
          <NavItem>
            <NavLink
              className={classes.tabLink}
              onClick={() => setActiveTab('1')}
            >
              <p className={activeTab === '1' ? classes.tabActive : classes.tabUnActive}>
                singles
                </p>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classes.tabLink}
              onClick={() => setActiveTab('2')}
            >
              <p className={activeTab === '2' ? classes.tabActive : classes.tabUnActive}>
                multiples
                </p>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classes.tabLink}
              onClick={() => setActiveTab('3')}
            >
              <p className={activeTab === '3' ? classes.tabActive : classes.tabUnActive}>
                teasers
                </p>
            </NavLink>
          </NavItem>
        </Nav>
      </div>
      <div className={classes.cardBody}>
        {
          (slipsCounter === undefined) || (slipsCounter === 0) || (betGames.length === 0)
            ?
            <div className={classes.cardBodyBackground}>
              <img
                src={require("../assets/img/bet-background.svg")}
                alt="bet-background"
                className={classes.cardBodyImg}
              />
              <p className={classes.cardBodyText}>There are no bets on your ticket.</p>
              <p className={classes.cardBodyText}>Click the odds to add a bet</p>
            </div>
            :
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                {tickets}
              </TabPane>
              <TabPane tabId="2">
                {tickets}
              </TabPane>
              <TabPane tabId="3">
                {tickets}
              </TabPane>
            </TabContent>
        }
      </div>
      <div className={classes.cardFooter}>
        <div className={classes.total}>
          <p className={classes.amount}>Total Stake</p>
          <p className={classes.amount}>EUR <span>0.00</span></p>
        </div>
        <div className={classes.total}>
          <p className={classes.amount}>Total Win</p>
          <p className={classes.amount}>EUR <span>0.00</span></p>
        </div>
        <Button className={classes.btnPlaceBet + " mx-auto"}>
          place bet
        </Button>
      </div>
    </div>
  );
}


