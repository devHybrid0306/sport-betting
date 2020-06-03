import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import styles from "../assets/js/components/carouselCardStyle.js";

const useStyles = makeStyles(styles);

export default function CarouselCard(props) {
  const { position, game } = props;

  const classes = useStyles();
  return (
    <div
      className={
        position === 1
          ? classes.card + " " + classes.card_first
          : position === 2
            ? classes.card + " " + classes.card_prev
            : position === 3
              ? classes.card + " " + classes.card_select
              : position === 4
                ? classes.card + " " + classes.card_next
                : classes.card + " " + classes.card_last
      }
    >
      <div
        className={
          ((position === 1) || (position === 5))
            ? classes.cardHeader + " " + classes.cardHeader_low
            : classes.cardHeader
        }
      >
        <div>
          <p
            className={
              (position === 3)
                ? classes.time + " " + classes.time_high
                : ((position === 1) || (position === 5))
                  ? classes.time + " " + classes.time_low
                  : classes.time + " " + classes.time_mid
            }
          >
            {game.time}
          </p>
          <p
            className={
              (position === 3)
                ? classes.day + " " + classes.day_high
                : ((position === 1) || (position === 5))
                  ? classes.day + " " + classes.day_low
                  : classes.day + " " + classes.day_mid
            }
          >
            {game.day}
          </p>
        </div>
        <div className={classes.teamsLogo}>
          <div
            className={
              (position === 3)
                ? classes.hostTeam + " " + classes.hostTeam_high
                : ((position === 1) || (position === 5))
                  ? classes.hostTeam + " " + classes.hostTeam_low
                  : classes.hostTeam + " " + classes.hostTeam_mid
            }
          >
            <img
              src={game.hostTeamImg}
              alt="host-team"
              className={
                (position === 3)
                  ? classes.teamLogoImg_high
                  : ((position === 1) || (position === 5))
                    ? classes.teamLogoImg_low
                    : classes.teamLogoImg_mid
              }
            />
          </div>
          <div
            className={
              (position === 3)
                ? classes.guestTeam + " " + classes.guestTeam_high
                : ((position === 1) || (position === 5))
                  ? classes.guestTeam + " " + classes.guestTeam_low
                  : classes.guestTeam + " " + classes.guestTeam_mid
            }
          >
            <img
              src={game.guestTeamImg}
              alt="guest-team"
              className={
                (position === 3)
                  ? classes.teamLogoImg_high
                  : ((position === 1) || (position === 5))
                    ? classes.teamLogoImg_low
                    : classes.teamLogoImg_mid
              }
            />
          </div>
        </div>
      </div>
      <div className={classes.cardBody}>
        <img
          src={game.gameImg}
          alt="host-guest"
          className={
            ((position === 1) || (position === 5))
              ? classes.gameImg + " " + classes.gameImg_low
              : classes.gameImg
          }
        />
        <p
          className={
            ((position === 1) || (position === 5))
              ? classes.gameType + " " + classes.gameType_low
              : classes.gameType
          }
        >
          {game.gameType}
        </p>
        <div>
          <div className={classes.teamScore}>
            <p
              className={
                (position === 3)
                  ? classes.loserTeam + " " + classes.loserTeam_high
                  : ((position === 1) || (position === 5))
                    ? classes.loserTeam + " " + classes.loserTeam_low
                    : classes.loserTeam + " " + classes.loserTeam_mid
              }
            >
              {game.hostTeamName}
            </p>
            <p
              className={
                (position === 3)
                  ? classes.loserTeam + " " + classes.loserTeam_high
                  : ((position === 1) || (position === 5))
                    ? classes.loserTeam + " " + classes.loserTeam_low
                    : classes.loserTeam + " " + classes.loserTeam_mid
              }
            >
              {game.hostTeamScore}
            </p>
          </div>
          <div className={classes.teamScore}>
            <p
              className={
                (position === 3)
                  ? classes.winnerTeam + " " + classes.winnerTeam_high
                  : ((position === 1) || (position === 5))
                    ? classes.winnerTeam + " " + classes.winnerTeam_low
                    : classes.winnerTeam + " " + classes.winnerTeam_mid
              }
            >
              {game.guestTeamName}
            </p>
            <p
              className={
                (position === 3)
                  ? classes.winnerTeam + " " + classes.winnerTeam_high
                  : ((position === 1) || (position === 5))
                    ? classes.winnerTeam + " " + classes.winnerTeam_low
                    : classes.winnerTeam + " " + classes.winnerTeam_mid
              }
            >
              {game.guestTeamScore}
            </p>
          </div>
        </div>
      </div>
      <div className={classes.cardFooter}>
        <button
          className={
            (position === 3)
              ? classes.btnSuccess + " " + classes.btn_high
              : ((position === 1) || (position === 5))
                ? classes.btnSuccess + " " + classes.btn_low
                : classes.btnSuccess + " " + classes.btn_mid
          }
        >
          1x
          <span className={classes.oddValue}>{game.valueSuccess}</span>
        </button>
        <button
          className={
            (position === 3)
              ? classes.btnSecondary + " " + classes.btn_high
              : ((position === 1) || (position === 5))
                ? classes.btnSecondary + " " + classes.btn_low
                : classes.btnSecondary + " " + classes.btn_mid
          }
        >
          x
          <span className={classes.oddSeocndaryValue}>{game.valueSecondary}</span>
        </button>
        <button
          className={
            (position === 3)
              ? classes.btnDanger + " " + classes.btn_high
              : ((position === 1) || (position === 5))
                ? classes.btnDanger + " " + classes.btn_low
                : classes.btnDanger + " " + classes.btn_mid
          }
        >
          2x
          <span className={classes.oddValue}>{game.valueDanger}</span>
        </button>
      </div>
    </div>
  );
}


