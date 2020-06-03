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
  Fade,
} from "@material-ui/core";

import BetButton from "./BetButton.js"

import styles from "../assets/js/components/bettingBoardStyle.js";

const useStyles = makeStyles(styles);

const bet_money_line = [
  { index: 1, name: "Mitteldeutscher BC", value: "1.632" },
  { index: 2, name: "+Rasta Vechta", value: "3.567" },
];

const bet_handicap = [
  { index: 1, name: "-12.5", value: "1.632" },
  { index: 2, name: "+12.5", value: "1.632" },
  { index: 3, name: "-13", value: "1.672" },
  { index: 4, name: "+13", value: "1.672" },
  { index: 5, name: "-13.5", value: "1.782" },
  { index: 6, name: "+13.5", value: "1.782" },
  { index: 7, name: "-14", value: "1.987" },
  { index: 8, name: "+14", value: "1.987" },
  { index: 9, name: "-14.5", value: "1.999" },
  { index: 10, name: "+14.5", value: "1.999" },
  { index: 11, name: "-15", value: "2.002" },
  { index: 12, name: "+15", value: "2.002" },
  { index: 13, name: "-15.5", value: "2.123" },
  { index: 14, name: "+15.5", value: "2.123" },
  { index: 15, name: "-16", value: "2.332" },
  { index: 16, name: "+16", value: "2.332" },
  { index: 17, name: "-16.5", value: "2.335" },
  { index: 18, name: "+16.5", value: "2.335" },
  { index: 19, name: "-17", value: "2.456" },
  { index: 20, name: "+17", value: "2.456" },
  { index: 21, name: "-17.5", value: "2.567" },
  { index: 22, name: "+17.5", value: "2.567" },
];

const bet_total = [
  { index: 1, name: "Over -167.5", value: "1.632" },
  { index: 2, name: "Over +167.5", value: "1.632" },
  { index: 3, name: "Over -168", value: "1.672" },
  { index: 4, name: "Over +168", value: "1.672" },
  { index: 5, name: "Over -168.5", value: "1.782" },
  { index: 6, name: "Over +168.5", value: "1.782" },
  { index: 7, name: "Over -169", value: "1.987" },
  { index: 8, name: "Over +169", value: "1.987" },
  { index: 9, name: "Over -169.5", value: "1.999" },
  { index: 10, name: "Over +169.5", value: "1.999" },
  { index: 11, name: "Over -170", value: "2.002" },
  { index: 12, name: "Over +170", value: "2.002" },
  { index: 13, name: "Over -170.5", value: "2.123" },
  { index: 14, name: "Over +170.5", value: "2.123" },
  { index: 15, name: "Over -171", value: "2.332" },
  { index: 16, name: "Over +171", value: "2.332" },
  { index: 17, name: "Over -171.5", value: "2.335" },
  { index: 18, name: "Over +171.5", value: "2.335" },
  { index: 19, name: "Over -172", value: "2.456" },
  { index: 20, name: "Over +172", value: "2.456" },
  { index: 21, name: "Over -172.5", value: "2.567" },
  { index: 22, name: "Over +172.5", value: "2.567" },
];

const bet_team_total = [
  { index: 1, name: "Over 67.5", value: "1.632" },
  { index: 2, name: "Over 67.5", value: "3.632" },
  { index: 3, name: "Under 67.5", value: "1.672" },
  { index: 4, name: "Under 66.5", value: "3.672" },
];

export default function BettingBoard(props) {
  const { dispatch } = props;
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState('1');

  return (
    <div>
      <Nav className={classes.tabMenu}>
        <NavItem className={classes.tabItem}>
          <NavLink
            className={activeTab === '1' ? classes.activeTabLink : classes.tabLink}
            onClick={() => setActiveTab('1')}
          >
            Money line – Game
          </NavLink>
        </NavItem>
        <NavItem className={classes.tabItem}>
          <NavLink
            className={activeTab === '2' ? classes.activeTabLink : classes.tabLink}
            onClick={() => setActiveTab('2')}
          >
            Handicap – Game
          </NavLink>
        </NavItem>
        <NavItem className={classes.tabItem}>
          <NavLink
            className={activeTab === '3' ? classes.activeTabLink : classes.tabLink}
            onClick={() => setActiveTab('3')}
          >
            Total – Game
          </NavLink>
        </NavItem>
        <NavItem className={classes.tabItem}>
          <NavLink
            className={activeTab === '4' ? classes.activeTabLink : classes.tabLink}
            onClick={() => setActiveTab('4')}
          >
            Team Total – Game
          </NavLink>
        </NavItem>
        <NavItem className={classes.tabItem}>
          <NavLink
            className={activeTab === '5' ? classes.activeTabLink : classes.tabLink}
            onClick={() => setActiveTab('5')}
          >
            Money line – 1st Half
          </NavLink>
        </NavItem>
        <NavItem className={classes.tabItem}>
          <NavLink
            className={activeTab === '6' ? classes.activeTabLink : classes.tabLink}
            onClick={() => setActiveTab('6')}
          >
            Handicap – 1st Half
          </NavLink>
        </NavItem>
        <NavItem className={classes.tabItem}>
          <NavLink
            className={activeTab === '7' ? classes.activeTabLink : classes.tabLink}
            onClick={() => setActiveTab('7')}
          >
            Total – 1st Half
          </NavLink>
        </NavItem>
        <NavItem className={classes.tabItem}>
          <NavLink
            className={activeTab === '8' ? classes.activeTabLink : classes.tabLink}
            onClick={() => setActiveTab('8')}
          >
            Team Total – 1st Half
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Fade in>
            <div className={classes.betContainer + " row"}>
              {
                bet_money_line.map((bet) => (
                  <BetButton 
                    key={bet.index} 
                    dispatch={dispatch}  
                    betName={bet.name} 
                    betValue={bet.value} 
                  />
                ))
              }
            </div>
          </Fade>
        </TabPane>
        <TabPane tabId="2">
          <Fade in>
            <div className={classes.betContainer + " row"}>
              {
                bet_handicap.map((bet) => (
                  <BetButton 
                    key={bet.index} 
                    dispatch={dispatch}  
                    betName={bet.name} 
                    betValue={bet.value} 
                  />
                ))
              }
            </div>
          </Fade>
        </TabPane>
        <TabPane tabId="3">
          <Fade in>
            <div className={classes.betContainer + " row"}>
              {
                bet_total.map((bet) => (
                  <BetButton 
                    key={bet.index} 
                    dispatch={dispatch}  
                    betName={bet.name} 
                    betValue={bet.value} 
                  />
                ))
              }
            </div>
          </Fade>
        </TabPane>
        <TabPane tabId="4">
          <Fade in>
            <div className={classes.betContainer + " row"}>
              {
                bet_team_total.map((bet) => (
                  <BetButton 
                    key={bet.index} 
                    dispatch={dispatch}  
                    betName={bet.name} 
                    betValue={bet.value} 
                  />
                ))
              }
            </div>
          </Fade>
        </TabPane>
        <TabPane tabId="5">
          <Fade in>
            <div className={classes.betContainer + " row"}>
              {
                bet_money_line.map((bet) => (
                  <BetButton 
                    key={bet.index} 
                    dispatch={dispatch}  
                    betName={bet.name} 
                    betValue={bet.value} 
                  />
                ))
              }
            </div>
          </Fade>
        </TabPane>
        <TabPane tabId="6">
          <Fade in>
            <div className={classes.betContainer + " row"}>
              {
                bet_handicap.map((bet) => (
                  <BetButton 
                    key={bet.index} 
                    dispatch={dispatch}  
                    betName={bet.name} 
                    betValue={bet.value} 
                  />
                ))
              }
            </div>
          </Fade>
        </TabPane>
        <TabPane tabId="7">
          <Fade in>
            <div className={classes.betContainer + " row"}>
              {
                bet_total.map((bet) => (
                  <BetButton 
                    key={bet.index} 
                    dispatch={dispatch}  
                    betName={bet.name} 
                    betValue={bet.value} 
                  />
                ))
              }
            </div>
          </Fade>
        </TabPane>
        <TabPane tabId="8">
          <Fade in>
            <div className={classes.betContainer + " row"}>
              {
                bet_team_total.map((bet) => (
                  <BetButton 
                    key={bet.index} 
                    dispatch={dispatch}  
                    betName={bet.name} 
                    betValue={bet.value} 
                  />
                ))
              }
            </div>
          </Fade>
        </TabPane>
      </TabContent>
    </div>   
  );
}



