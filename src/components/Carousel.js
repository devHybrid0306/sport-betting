import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Slide,
  IconButton,
} from "@material-ui/core";

import CarouselCard from "./CarouselCard.js"

import styles from "../assets/js/components/carouselStyle.js";

const useStyles = makeStyles(styles);

const game = {
  time: "9.30",
  day: "today",
  hostTeamImg: require("../assets/img/FC_Chelsea_Logo.svg.png"),
  guestTeamImg: require("../assets/img/Tottenham_Hotspur.svg"),
  gameImg: require("../assets/img/chelsea-tottenham-1040x572.jpg"),
  gameType: "top game",
  hostTeamName: "Chelsea",
  hostTeamScore: "0",
  guestTeamName: "Tottenham Hotspur",
  guestTeamScore: "4",
  valueSuccess: "9.50",
  valueSecondary: "9.50",
  valueDanger: "9.50",
};

export default function Carosuel(props) {
  const classes = useStyles();
  const [level, setLevel] = useState(0);
  const [mobileLevel, setMobileLevel] = useState(0);
  const [direction, setDirection]=useState("right");

  const getPosition = (index) => {
    return (level + index) % 5 + 1;
  }

  const moveLeft = () => {
    setLevel((level - 1) < 0 ? 4 : level - 1);
  }

  const moveRight = () => {
    setLevel((level + 1) === 5 ? 0 : level + 1);
  }

  const moveMobileLeft = () => {
    setDirection("left");
    setMobileLevel((mobileLevel - 1) < 0 ? 2 : mobileLevel - 1);    
  }

  const moveMobileRight = () => {
    setDirection("right");
    setMobileLevel((mobileLevel + 1) === 3 ? 0 : mobileLevel + 1);    
  }

  return (
    <>
      <div className={classes.container + " col-12 d-lg-block"}>
        <div className={classes.carousel}>
          <IconButton
            className={classes.btnPrev}
            onClick={moveLeft}
          >
            <img
              src={require("../assets/img/icon-awesome-angle-left.svg")}
              alt="btn-prev"
              className={classes.btnIcon}
            />
          </IconButton>
          <CarouselCard position={getPosition(1)} game={game} />
          <CarouselCard position={getPosition(2)} game={game} />
          <CarouselCard position={getPosition(3)} game={game} />
          <CarouselCard position={getPosition(4)} game={game} />
          <CarouselCard position={getPosition(5)} game={game} />
          <IconButton
            className={classes.btnNext}
            onClick={moveRight}
          >
            <img
              src={require("../assets/img/icon-awesome-angle-right.svg")}
              alt="btn-prev"
              className={classes.btnIcon}
            />
          </IconButton>
        </div>
      </div>
      <div className={classes.mobileContainer + " d-lg-none mx-auto"}>
        <div className={classes.mobileCarousel}>
          <IconButton
            className={classes.btnPrev}
            onClick={moveMobileLeft}
          >
            <img
              src={require("../assets/img/icon-awesome-angle-left.svg")}
              alt="btn-prev"
              className={classes.btnIcon}
            />
          </IconButton>
          <Slide direction={direction} in={mobileLevel === 0}>
            <Paper elevation={4} className={classes.card}>
              <CarouselCard position={3} game={game} />
            </Paper>
          </Slide>
          <Slide direction={direction} in={mobileLevel === 1}>
            <Paper elevation={4} className={classes.card}>
              <CarouselCard position={3} game={game} />
            </Paper>
          </Slide>
          <Slide direction={direction} in={mobileLevel === 2}>
            <Paper elevation={4} className={classes.card}>
              <CarouselCard position={3} game={game} />
            </Paper>
          </Slide>
          <IconButton
            className={classes.btnNext}
            onClick={moveMobileRight}
          >
            <img
              src={require("../assets/img/icon-awesome-angle-right.svg")}
              alt="btn-prev"
              className={classes.btnIcon}
            />
          </IconButton>
        </div>
      </div>
    </>
  );
}


