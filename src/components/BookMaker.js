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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

import ToggleButton from "./ToggleButton.js"

import styles from "../assets/js/components/bookMakerStyle.js";

const useStyles = makeStyles(styles);

function BookMakerBoard(props) {
  const { dispatch, sport, live, rows } = props;
  const classes = useStyles();

  return (
    <Table className={classes.table + " table-borderless"} aria-label="pills-soccer-tab">
      <TableHead className={classes.tableHead}>
        <TableRow>
          <TableCell className={classes.tableHeadItem} />
          <TableCell className={classes.tableHeadItem + " logos"} />
          <TableCell className={classes.tableHeadItem + " " + classes.tableHeadScore} />
          <TableCell className={classes.tableHeadItem + " text-center"}>1X</TableCell>
          <TableCell className={classes.tableHeadItem + " text-center"}>X</TableCell>
          <TableCell className={classes.tableHeadItem + " text-center"}>2X</TableCell>
          <TableCell className={classes.tableHeadItem + " " + classes.handicap + " text-center"}>
            HANDICAP
          </TableCell>
          <TableCell className={classes.tableHeadItem + " " + classes.over_under + " text-center"}>
            OVER
          </TableCell>
          <TableCell className={classes.tableHeadItem + " " + classes.over_under + " text-center"}>
            UNDER
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          row.sport === sport
            ? <TableRow className={classes.tableBodyRow} key={row.index}>
              <TableCell className={classes.tableBodyCell} padding="none" align="center">
                <p className={classes.time}>{row.time}</p>
                <p className={classes.date}>{row.date}</p>
              </TableCell>
              <TableCell className={classes.tableBodyCell + " logos"} padding="none" align="center">
                <div className={classes.teamsLogo}>
                  <div className={classes.hostTeam}>
                    <img
                      src={row.hostTeamImg}
                      alt="host-team"
                      className={classes.teamLogoImg}
                    />
                  </div>
                  <div className={classes.guestTeam}>
                    <img src={row.guestTeamImg}
                      alt="guest-team"
                      className={classes.teamLogoImg}
                    />
                  </div>
                </div>
              </TableCell>
              <TableCell
                className={classes.playingTeams + " " + classes.tableBodyCell}
                padding="none"
                align="center"
              >
                <div className={classes.score}>
                  <p className={classes.teamName}>{row.hostTeamName}</p>
                  <p className={classes.teamName + " mb-0 font-weight-bold"}>{row.guestTeamName}</p>
                </div>
                {
                  live === true
                    ?
                    <div className={classes.score}>
                      <p className="mb-0 text-danger">{row.round}</p>
                      <p className="mb-0 text-danger">{row.livingTime}</p>
                    </div>
                    : <></>
                }
                <div className={classes.score}>
                  <p className={classes.scoreValue}>{row.hostScore}</p>
                  <p className={classes.scoreValue + " mb-0 font-weight-bold"}>{row.guestScore}</p>
                </div>
              </TableCell>
              <TableCell
                className={classes.simpleBet + " " + classes.tableBodyCell}
                padding="none"
                align="center"
              >
                <ToggleButton dispatch={dispatch} gameIndex={row.index} bet={row.bet1X} />
              </TableCell>
              <TableCell
                className={classes.simpleBet + " " + classes.tableBodyCell}
                padding="none"
                align="center"
              >
                <ToggleButton dispatch={dispatch} gameIndex={row.index} bet={row.betX} />
              </TableCell>
              <TableCell
                className={classes.simpleBet + " " + classes.tableBodyCell}
                padding="none"
                align="center"
              >
                <ToggleButton dispatch={dispatch} gameIndex={row.index} bet={row.bet2X} />
              </TableCell>
              <TableCell
                className={classes.handicap + " " + classes.tableBodyCell}
                padding="none"
                align="center"
              >
                <ToggleButton dispatch={dispatch} className="mr-2" gameIndex={row.index} bet={row.handicap_0} />
                <ToggleButton dispatch={dispatch} gameIndex={row.index} bet={row.handicap_1} />
                <Button className={classes.btnSort}><i className="fas fa-sort"></i></Button>
              </TableCell>
              <TableCell
                className={classes.over_under + " " + classes.tableBodyCell}
                padding="none"
                align="center"
              >
                <ToggleButton dispatch={dispatch} gameIndex={row.index} bet={row.over} />
              </TableCell>
              <TableCell
                className={classes.over_under + " " + classes.tableBodyCell}
                padding="none"
                align="center"
              >
                <ToggleButton dispatch={dispatch} gameIndex={row.index} bet={row.under} />
                <Button size="small" className={classes.btnSort}><i className="fas fa-sort"></i></Button>
              </TableCell>
            </TableRow>
            : null
        ))}
      </TableBody>
    </Table>
  );
}

export default function BookMaker(props) {
  const { dispatch, live, betGames } = props;
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState('1');

  return (
    <div className="col-12 col-lg-8 col-xl-9 px-0">
      <div className={classes.container}>
        <Nav className={classes.tabMenu}>
          <NavItem className={classes.tabItem}>
            <NavLink
              className={classes.tabLink}
              onClick={() => setActiveTab('1')}
            >
              {
                activeTab === '1'
                  ?
                  <img
                    src={require("../assets/img/icons/soccer.svg")}
                    alt="soccer"
                    className={classes.tabActive}
                  />
                  :
                  <i className={classes.tabUnActive + " fad fa-futbol"} />
              }
            </NavLink>
          </NavItem>
          <NavItem className={classes.tabItem}>
            <NavLink
              className={classes.tabLink}
              onClick={() => setActiveTab('2')}
            >
              {
                activeTab === '2'
                  ?
                  <img
                    src={require("../assets/img/icons/basketball-court.svg")}
                    alt="backetball"
                    className={classes.tabActive}
                  />
                  :
                  <i className={classes.tabUnActive + " fas fa-basketball-ball"} />
              }
            </NavLink>
          </NavItem>
          <NavItem className={classes.tabItem}>
            <NavLink
              className={classes.tabLink}
              onClick={() => setActiveTab('3')}
            >
              {
                activeTab === '3'
                  ?
                  <img
                    src={require("../assets/img/icons/tennis.svg")}
                    alt="tennis"
                    className={classes.tabActive}
                  />
                  :
                  <i className={classes.tabUnActive + " fas fa-tennis-ball"} />
              }
            </NavLink>
          </NavItem>
          <NavItem className={classes.tabItem}>
            <NavLink
              className={classes.tabLink}
              onClick={() => setActiveTab('4')}
            >
              {
                activeTab === '4'
                  ?
                  <img
                    src={require("../assets/img/icons/ball.svg")}
                    alt="volleyball"
                    className={classes.tabActive}
                  />
                  :
                  <i className={classes.tabUnActive + " fas fa-volleyball-ball"} />
              }
            </NavLink>
          </NavItem>
          <NavItem className={classes.tabItem}>
            <NavLink
              className={classes.tabLink}
              onClick={() => setActiveTab('5')}
            >
              {
                activeTab === '5'
                  ?
                  <img
                    src={require("../assets/img/icons/rugby-ball.svg")}
                    alt="rugby"
                    className={classes.tabActive}
                  />
                  :
                  <i className={classes.tabUnActive + " fas fa-football-ball"} />
              }
            </NavLink>
          </NavItem>
          <NavItem className={classes.tabItem}>
            <NavLink
              className={classes.tabLink}
              onClick={() => setActiveTab('6')}
            >
              {
                activeTab === '6'
                  ?
                  <img
                    src={require("../assets/img/icons/hockey.svg")}
                    alt="hocky"
                    className={classes.tabActive}
                  />
                  :
                  <i className={classes.tabUnActive + " fas fa-hockey-puck"} />
              }
            </NavLink>
          </NavItem>
          <NavItem className={classes.tabItem}>
            <NavLink
              className={classes.tabLink}
              onClick={() => setActiveTab('7')}
            >
              {
                activeTab === '7'
                  ?
                  <img
                    src={require("../assets/img/icons/headset.svg")}
                    alt="headset"
                    className={classes.tabActive}
                  />
                  :
                  <i className={classes.tabUnActive + " fas fa-headset"} />
              }
            </NavLink>
          </NavItem>
          <NavItem className={classes.tabItem}>
            <NavLink
              className={classes.tabLink}
              onClick={() => setActiveTab('8')}
            >
              {
                activeTab === '8'
                  ?
                  <img
                    src={require("../assets/img/icons/chess.svg")}
                    alt="chess"
                    className={classes.tabActive}
                  />
                  :
                  <i className={classes.tabUnActive + " fas fa-chess-knight"} />
              }
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <BookMakerBoard dispatch={dispatch} sport="Soccer" live={live} rows={betGames} />
          </TabPane>
          <TabPane tabId="2">
            <BookMakerBoard dispatch={dispatch} sport="BasketBall" live={live} rows={betGames} />
          </TabPane>
          <TabPane tabId="3">
            <BookMakerBoard dispatch={dispatch} sport="Tennis" live={live} rows={betGames} />
          </TabPane>
          <TabPane tabId="4">
            <BookMakerBoard dispatch={dispatch} sport="VolleyBall" live={live} rows={betGames} />
          </TabPane>
          <TabPane tabId="5">
            <BookMakerBoard dispatch={dispatch} sport="Rugby" live={live} rows={betGames} />
          </TabPane>
          <TabPane tabId="6">
            <BookMakerBoard dispatch={dispatch} sport="Hockey" live={live} rows={betGames} />
          </TabPane>
          <TabPane tabId="7">
            <BookMakerBoard dispatch={dispatch} sport="Esports" live={live} rows={betGames} />
          </TabPane>
          <TabPane tabId="8">
            <BookMakerBoard dispatch={dispatch} sport="Chess" live={live} rows={betGames} />
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
}


