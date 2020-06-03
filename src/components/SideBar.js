import React, { useState } from "react";
import {
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import { makeStyles } from "@material-ui/core/styles";

import styles from "../assets/js/components/sideBarStyle.js";

const useStyles = makeStyles(styles);

export default function SideBar(props) {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState('1');
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={classes.container + " col-12 col-lg-1"}>
      <Navbar
        className={
          isOpen
            ? classes.sideBar + " " + classes.openedBar + " flex-lg-column"
            : classes.sideBar + " flex-lg-column"
        }
        onBlur={() => setIsOpen(false)}
      >
        <NavbarToggler
          className={classes.btnSideBarToggle + " d-lg-inline-block"}
          onClick={toggle}
        >
          <i className="fas fa-bars"></i>
        </NavbarToggler>
        <Nav fill>
          <NavItem className={classes.tabItem}>
            <NavLink
              className={activeTab === '1' ? classes.activeTabLink : classes.tabLink}
              onClick={() => setActiveTab('1')}
            >
              {
                activeTab === '1'
                  ?
                  <img
                    src={require("../assets/img/icons/soccer.svg")}
                    alt="soccer"
                    className={classes.tabImg}
                  />
                  :
                  <i className={classes.tabImg + " fad fa-futbol"} />
              }
              {
                isOpen
                  ?
                  <>
                    <span
                      className={
                        activeTab === '1'
                          ? classes.activeSportName + " ml-3"
                          : classes.sportName + " ml-3"
                      }
                    >
                      Soccer
                    </span>
                    <span
                      className={
                        activeTab === '1'
                          ? classes.activeBadge + " ml-auto"
                          : classes.badge + " ml-auto"
                      }
                    >
                      +12
                    </span>
                  </>
                  : <></>
              }
            </NavLink>
          </NavItem>
          <NavItem className={classes.tabItem}>
            <NavLink
              className={activeTab === '2' ? classes.activeTabLink : classes.tabLink}
              onClick={() => setActiveTab('2')}
            >
              {
                activeTab === '2'
                  ?
                  <img
                    src={require("../assets/img/icons/basketball-court.svg")}
                    alt="basketball"
                    className={classes.tabImg}
                  />
                  :
                  <i className={classes.tabImg + " fas fa-basketball-ball"} />
              }
              {
                isOpen
                  ?
                  <>
                    <span
                      className={
                        activeTab === '2'
                          ? classes.activeSportName + " ml-3"
                          : classes.sportName + " ml-3"
                      }
                    >
                      Basketball
                    </span>
                    <span
                      className={
                        activeTab === '2'
                          ? classes.activeBadge + " ml-auto"
                          : classes.badge + " ml-auto"
                      }
                    >
                      +1
                    </span>
                  </>
                  : <></>
              }
            </NavLink>
          </NavItem>
          <NavItem className={classes.tabItem}>
            <NavLink
              className={activeTab === '3' ? classes.activeTabLink : classes.tabLink}
              onClick={() => setActiveTab('3')}
            >
              {
                activeTab === '3'
                  ?
                  <img
                    src={require("../assets/img/icons/tennis.svg")}
                    alt="tennis"
                    className={classes.tabImg}
                  />
                  :
                  <i className={classes.tabImg + " fas fa-tennis-ball"} />
              }
              {
                isOpen
                  ?
                  <>
                    <span
                      className={
                        activeTab === '3'
                          ? classes.activeSportName + " ml-3"
                          : classes.sportName + " ml-3"
                      }
                    >
                      Tennis
                    </span>
                    <span
                      className={
                        activeTab === '3'
                          ? classes.activeBadge + " ml-auto"
                          : classes.badge + " ml-auto"
                      }
                    >
                      +5
                    </span>
                  </>
                  : <></>
              }
            </NavLink>
          </NavItem>
          <NavItem className={classes.tabItem}>
            <NavLink
              className={activeTab === '4' ? classes.activeTabLink : classes.tabLink}
              onClick={() => setActiveTab('4')}
            >
              {
                activeTab === '4'
                  ?
                  <img
                    src={require("../assets/img/icons/ball.svg")}
                    alt="volleyball"
                    className={classes.tabImg}
                  />
                  :
                  <i className={classes.tabImg + " fas fa-volleyball-ball"} />
              }
              {
                isOpen
                  ?
                  <>
                    <span
                      className={
                        activeTab === '4'
                          ? classes.activeSportName + " ml-3"
                          : classes.sportName + " ml-3"
                      }
                    >
                      Volleyball
                    </span>
                    <span
                      className={
                        activeTab === '4'
                          ? classes.activeBadge + " ml-auto"
                          : classes.badge + " ml-auto"
                      }
                    >
                      +8
                    </span>
                  </>
                  : <></>
              }
            </NavLink>
          </NavItem>
          <NavItem className={classes.tabItem}>
            <NavLink
              className={activeTab === '5' ? classes.activeTabLink : classes.tabLink}
              onClick={() => setActiveTab('5')}
            >
              {
                activeTab === '5'
                  ?
                  <img
                    src={require("../assets/img/icons/rugby-ball.svg")}
                    alt="rugby"
                    className={classes.tabImg}
                  />
                  :
                  <i className={classes.tabImg + " fas fa-football-ball"} />
              }
              {
                isOpen
                  ?
                  <>
                    <span
                      className={
                        activeTab === '5'
                          ? classes.activeSportName + " ml-3"
                          : classes.sportName + " ml-3"
                      }
                    >
                      Football
                    </span>
                    <span
                      className={
                        activeTab === '5'
                          ? classes.activeBadge + " ml-auto"
                          : classes.badge + " ml-auto"
                      }
                    >
                      +5
                    </span>
                  </>
                  : <></>
              }
            </NavLink>
          </NavItem>
          <NavItem className={classes.tabItem}>
            <NavLink
              className={activeTab === '6' ? classes.activeTabLink : classes.tabLink}
              onClick={() => setActiveTab('6')}
            >
              {
                activeTab === '6'
                  ?
                  <img
                    src={require("../assets/img/icons/hockey.svg")}
                    alt="hockey"
                    className={classes.tabImg}
                  />
                  :
                  <i className={classes.tabImg + " fas fa-hockey-puck"} />
              }
              {
                isOpen
                  ?
                  <>
                    <span
                      className={
                        activeTab === '6'
                          ? classes.activeSportName + " ml-3"
                          : classes.sportName + " ml-3"
                      }
                    >
                      Hockey
                    </span>
                    <span
                      className={
                        activeTab === '6'
                          ? classes.activeBadge + " ml-auto"
                          : classes.badge + " ml-auto"
                      }
                    >
                      +4
                    </span>
                  </>
                  : <></>
              }
            </NavLink>
          </NavItem>
          <NavItem className={classes.tabItem}>
            <NavLink
              className={activeTab === '7' ? classes.activeTabLink : classes.tabLink}
              onClick={() => setActiveTab('7')}
            >
              {
                activeTab === '7'
                  ?
                  <img
                    src={require("../assets/img/icons/headset.svg")}
                    alt="headset"
                    className={classes.tabImg}
                  />
                  :
                  <i className={classes.tabImg + " fas fa-headset"} />
              }
              {
                isOpen
                  ?
                  <>
                    <span
                      className={
                        activeTab === '7'
                          ? classes.activeSportName + " ml-3"
                          : classes.sportName + " ml-3"
                      }
                    >
                      Esports
                    </span>
                    <span
                      className={
                        activeTab === '7'
                          ? classes.activeBadge + " ml-auto"
                          : classes.badge + " ml-auto"
                      }
                    >
                      +4
                    </span>
                  </>
                  : <></>
              }
            </NavLink>
          </NavItem>
          <NavItem className={classes.tabItem}>
            <NavLink
              className={activeTab === '8' ? classes.activeTabLink : classes.tabLink}
              onClick={() => setActiveTab('8')}
            >
              {
                activeTab === '8'
                  ?
                  <img
                    src={require("../assets/img/icons/chess.svg")}
                    alt="chess"
                    className={classes.tabImg}
                  />
                  :
                  <i className={classes.tabImg + " fas fa-chess-knight"} />
              }
              {
                isOpen
                  ?
                  <>
                    <span
                      className={
                        activeTab === '8'
                          ? classes.activeSportName + " ml-3"
                          : classes.sportName + " ml-3"
                      }
                    >
                      Chess
                    </span>
                    <span
                      className={
                        activeTab === '8'
                          ? classes.activeBadge + " ml-auto"
                          : classes.badge + " ml-auto"
                      }
                    >
                      +6
                    </span>
                  </>
                  : <></>
              }
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}


