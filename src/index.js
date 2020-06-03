import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducer from "./common/reducer.js";
import history from "./common/history.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

import HomePage from "./pages/Home/Home.js";
import LandingLivePage from "./pages/LandingLive/LandingLive.js";
import MainBetPage from "./pages/MainBet/MainBet.js";
import MainBetLivePage from "./pages/MainBetLive/MainBetLive.js";

import "./assets/css/basicStyle.css";

import "./assets/fonts/fontawesome-pro-5.12.0-web/css/all.css";
import "./assets/fonts/fontawesome-pro-5.12.0-web/css/all.min.css";

const store = createStore(reducer);

ReactDOM.render(
  <Provider className="body" store={store} >
    <Header />
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/landing-live" component={LandingLivePage} />
        <Route path="/main-bet" component={MainBetPage} />
        <Route path="/main-bet-live" component={MainBetLivePage} />
      </Switch>
    </Router>
    <Footer />
  </Provider>,
  document.getElementById("root")
);