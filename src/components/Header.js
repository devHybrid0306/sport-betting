import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Hidden,
  IconButton,
  Button,
  Grid,
  Collapse,
  Modal,
  Backdrop,
  Slide,
  Input,
} from "@material-ui/core";
import { Search, Menu } from "@material-ui/icons";

import history from "../common/history.js";

import styles from "../assets/js/components/headerStyle.js";

const useStyles = makeStyles(styles);

export default function Header(props) {
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleMenuChange = () => {
    setMenuOpen((prev) => !prev);
  };

  const doLogin = () => {
    setMenuOpen(false);
    history.push('/');
  };

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.container}>
        <a href="/">
          <img
            src={require("../assets/img/logo.png")}
            alt="logo"
            className={classes.brand}
          />
        </a>
        <Grid container className={classes.right}>
          <IconButton
            aria-label="search"
            size="small"
            className={classes.btnSearch}
            onClick={handleModalOpen}
          >
            <Search />
          </IconButton>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modalSearch}
            open={modalOpen}
            onClose={handleModalClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Slide
              direction="down"
              in={modalOpen}
            >
              <Input
                className={classes.search}
                autoFocus
                placeholder="Search"
              />
            </Slide>
          </Modal>
          <Hidden smDown implementation="css">
            <Button
              className={classes.btnMenu}
              onClick={doLogin}
            >
              Register
            </Button>
            <Button
              className={classes.btnMenu}
              onClick={doLogin}
            >
              Login
            </Button>
          </Hidden>
          <Hidden mdUp>
            <IconButton
              color="inherit"
              size="small"
              aria-label="open drawer"
              onClick={handleMenuChange}
            >
              <Menu />
            </IconButton>
          </Hidden>
        </Grid>
      </Toolbar>
      <Hidden mdUp implementation="js">
        <Collapse in={menuOpen} className={classes.hideMenu}>
          <Grid
            container
            direction="column"
            alignItems="flex-end"
          >
            <Button
              className={classes.btnMenu}
            // onClick={() => history.push('/register')}
            >
              Register
            </Button>
            <Button
              className={classes.btnMenu}
              onClick={doLogin}
            >
              Login
            </Button>
          </Grid>
        </Collapse >
      </Hidden>
    </AppBar>
  );
}


