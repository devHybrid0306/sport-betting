import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
} from "@material-ui/core";

import styles from "../assets/js/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Grid container className={classes.list}>
          <a href="/landing-live" className={classes.linkItem}>how it works</a>
          <a href="/main-bet" className={classes.linkItem}>about us</a>
          <a href="/main-bet-live" className={classes.linkItem}>contact us</a>
          <a href="/" className={classes.linkItem}>privacy policy</a>
          <a href="/" className={classes.linkItem}>log in</a>
      </Grid>      
    </footer> 
  );
}


