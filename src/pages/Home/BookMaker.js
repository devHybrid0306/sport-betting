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

import ToggleButton from "../../components/ToggleButton.js"

import styles from "../../assets/js/pages/Home/bookMakerStyle.js";

const useStyles = makeStyles(styles);

const data = [
  {
    index: 1,
    time: "9:30",
    date: "11 Feb",
    hostImg: require("../../assets/img/FC_Chelsea_Logo.svg.png"),
    guestImg: require("../../assets/img/Tottenham_Hotspur.svg"),
    hostName: "Chelsea",
    guestName: "Tottenham Hotspur",
    hostScore: "0",
    guestScore: "4",
    bet1X: "3.25",
    betX: "5.00",
    bet2X: "8.00",
    handicap_0: "2.851",
    handicap_1: "1.456",
    over: "2.851",
    under: "1.456",
  },
  {
    index: 2,
    time: "9:30",
    date: "11 Feb",
    hostImg: require("../../assets/img/FC_Chelsea_Logo.svg.png"),
    guestImg: require("../../assets/img/Tottenham_Hotspur.svg"),
    hostName: "Chelsea",
    guestName: "Tottenham Hotspur",
    hostScore: "0",
    guestScore: "4",
    bet1X: "3.25",
    betX: "5.00",
    bet2X: "8.00",
    handicap_0: "2.851",
    handicap_1: "1.456",
    over: "2.851",
    under: "1.456",
  },
  {
    index: 3,
    time: "9:30",
    date: "11 Feb",
    hostImg: require("../../assets/img/FC_Chelsea_Logo.svg.png"),
    guestImg: require("../../assets/img/Tottenham_Hotspur.svg"),
    hostName: "Chelsea",
    guestName: "Tottenham Hotspur",
    hostScore: "0",
    guestScore: "4",
    bet1X: "3.25",
    betX: "5.00",
    bet2X: "8.00",
    handicap_0: "2.851",
    handicap_1: "1.456",
    over: "2.851",
    under: "1.456",
  },
  {
    index: 4,
    time: "9:30",
    date: "11 Feb",
    hostImg: require("../../assets/img/FC_Chelsea_Logo.svg.png"),
    guestImg: require("../../assets/img/Tottenham_Hotspur.svg"),
    hostName: "Chelsea",
    guestName: "Tottenham Hotspur",
    hostScore: "0",
    guestScore: "4",
    bet1X: "3.25",
    betX: "5.00",
    bet2X: "8.00",
    handicap_0: "2.851",
    handicap_1: "1.456",
    over: "2.851",
    under: "1.456",
  },
  {
    index: 5,
    time: "9:30",
    date: "11 Feb",
    hostImg: require("../../assets/img/FC_Chelsea_Logo.svg.png"),
    guestImg: require("../../assets/img/Tottenham_Hotspur.svg"),
    hostName: "Chelsea",
    guestName: "Tottenham Hotspur",
    hostScore: "0",
    guestScore: "4",
    bet1X: "3.25",
    betX: "5.00",
    bet2X: "8.00",
    handicap_0: "2.851",
    handicap_1: "1.456",
    over: "2.851",
    under: "1.456",
  },
  {
    index: 6,
    time: "9:30",
    date: "11 Feb",
    hostImg: require("../../assets/img/FC_Chelsea_Logo.svg.png"),
    guestImg: require("../../assets/img/Tottenham_Hotspur.svg"),
    hostName: "Chelsea",
    guestName: "Tottenham Hotspur",
    hostScore: "0",
    guestScore: "4",
    bet1X: "3.25",
    betX: "5.00",
    bet2X: "8.00",
    handicap_0: "2.851",
    handicap_1: "1.456",
    over: "2.851",
    under: "1.456",
  },
  {
    index: 7,
    time: "9:30",
    date: "11 Feb",
    hostImg: require("../../assets/img/FC_Chelsea_Logo.svg.png"),
    guestImg: require("../../assets/img/Tottenham_Hotspur.svg"),
    hostName: "Chelsea",
    guestName: "Tottenham Hotspur",
    hostScore: "0",
    guestScore: "4",
    bet1X: "3.25",
    betX: "5.00",
    bet2X: "8.00",
    handicap_0: "2.851",
    handicap_1: "1.456",
    over: "2.851",
    under: "1.456",
  },
  {
    index: 8,
    time: "9:30",
    date: "11 Feb",
    hostImg: require("../../assets/img/FC_Chelsea_Logo.svg.png"),
    guestImg: require("../../assets/img/Tottenham_Hotspur.svg"),
    hostName: "Chelsea",
    guestName: "Tottenham Hotspur",
    hostScore: "0",
    guestScore: "4",
    bet1X: "3.25",
    betX: "5.00",
    bet2X: "8.00",
    handicap_0: "2.851",
    handicap_1: "1.456",
    over: "2.851",
    under: "1.456",
  },
  {
    index: 9,
    time: "9:30",
    date: "11 Feb",
    hostImg: require("../../assets/img/FC_Chelsea_Logo.svg.png"),
    guestImg: require("../../assets/img/Tottenham_Hotspur.svg"),
    hostName: "Chelsea",
    guestName: "Tottenham Hotspur",
    hostScore: "0",
    guestScore: "4",
    bet1X: "3.25",
    betX: "5.00",
    bet2X: "8.00",
    handicap_0: "2.851",
    handicap_1: "1.456",
    over: "2.851",
    under: "1.456",
  }
];

function BookMakerBoard(props) {
  const { dispatch, rows } = props;
  const classes = useStyles();

  return (
    <Table className={classes.table + " table-borderless"} aria-label="pills-soccer-tab">
      <TableHead className={classes.tableHead}>
        <TableRow>
          <TableCell className={classes.tableHeadItem + " " + classes.tableHeadDataTime} />
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
          <TableRow className={classes.tableBodyRow} key={row.index}>
            <TableCell className={classes.tableBodyCell} padding="none" align="center">
              <p className={classes.time}>{row.time}</p>
              <p className={classes.date}>{row.date}</p>
            </TableCell>
            <TableCell className={classes.tableBodyCell + " logos"} padding="none" align="center">
              <div className={classes.teamsLogo}>
                <div className={classes.hostTeam}>
                  <img
                    src={row.hostImg}
                    alt="host-team"
                    className={classes.teamLogoImg}
                  />
                </div>
                <div className={classes.guestTeam}>
                  <img src={row.guestImg}
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
                <p className={classes.teamName}>{row.hostName}</p>
                <p className={classes.teamName + " mb-0 font-weight-bold"}>{row.guestName}</p>
              </div>
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
              <ToggleButton dispatch={dispatch} label={row.bet1X} />
            </TableCell>
            <TableCell
              className={classes.simpleBet + " " + classes.tableBodyCell}
              padding="none"
              align="center"
            >
              <ToggleButton dispatch={dispatch} label={row.betX} />
            </TableCell>
            <TableCell
              className={classes.simpleBet + " " + classes.tableBodyCell}
              padding="none"
              align="center"
            >
              <ToggleButton dispatch={dispatch} label={row.bet2X} />
            </TableCell>
            <TableCell
              className={classes.handicap + " " + classes.tableBodyCell}
              padding="none"
              align="center"
            >
              <ToggleButton dispatch={dispatch} className="mr-2" label={row.handicap_0} />
              <ToggleButton dispatch={dispatch} label={row.handicap_1} />
              <Button className={classes.btnSort}><i className="fas fa-sort"></i></Button>
            </TableCell>
            <TableCell
              className={classes.over_under + " " + classes.tableBodyCell}
              padding="none"
              align="center"
            >
              <ToggleButton dispatch={dispatch} label={row.over} />
            </TableCell>
            <TableCell
              className={classes.over_under + " " + classes.tableBodyCell}
              padding="none"
              align="center"
            >
              <ToggleButton dispatch={dispatch} label={row.under} />
              <Button size="small" className={classes.btnSort}><i className="fas fa-sort"></i></Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default function BookMaker(props) {
  const { dispatch } = props;
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
                    src={require("../../assets/img/icons/soccer.svg")}
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
                    src={require("../../assets/img/icons/basketball-court.svg")}
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
                    src={require("../../assets/img/icons/tennis.svg")}
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
                    src={require("../../assets/img/icons/ball.svg")}
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
                    src={require("../../assets/img/icons/rugby-ball.svg")}
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
                    src={require("../../assets/img/icons/hockey.svg")}
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
                    src={require("../../assets/img/icons/headset.svg")}
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
                    src={require("../../assets/img/icons/chess.svg")}
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
            <BookMakerBoard dispatch={dispatch} rows={data}/>
          </TabPane>
          <TabPane tabId="2">
            <BookMakerBoard dispatch={dispatch} rows={data}/>
          </TabPane>
          <TabPane tabId="3">
            <BookMakerBoard dispatch={dispatch} rows={data}/>
          </TabPane>
          <TabPane tabId="4">
            <BookMakerBoard dispatch={dispatch} rows={data}/>
          </TabPane>
          <TabPane tabId="5">
            <BookMakerBoard dispatch={dispatch} rows={data}/>
          </TabPane>
          <TabPane tabId="6">
            <BookMakerBoard dispatch={dispatch} rows={data}/>
          </TabPane>
          <TabPane tabId="7">
            <BookMakerBoard dispatch={dispatch} rows={data}/>
          </TabPane>
          <TabPane tabId="8">
            <BookMakerBoard dispatch={dispatch} rows={data}/>
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
}


