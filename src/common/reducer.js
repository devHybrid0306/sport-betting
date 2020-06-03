import produce from "immer";

import { CLICK_BET, CANCEL_BET } from './actions'

const reducer = (state, action) => {
  switch (action.type) {
    case CLICK_BET:
      return produce(state, draft => {
        draft.slipsCounter = draft.slipsCounter + 1;
        const betGame = draft.betGames.find(betGame => betGame.index === action.gameIndex);
        switch (action.betType) {
          case "bet1X":
            betGame.bet1X.status = true;
            break;
          case "betX":
            betGame.betX.status = true;
            break;
          case "bet2X":
            betGame.bet2X.status = true;
            break;
          case "handicap_0":
            betGame.handicap_0.status = true;
            break;
          case "handicap_1":
            betGame.handicap_1.status = true;
            break;
          case "over":
            betGame.over.status = true;
            break;
          case "under":
            betGame.under.status = true;
            break;
          default:
            break;
        }
      });
    case CANCEL_BET:
      return produce(state, draft => {
        draft.slipsCounter = draft.slipsCounter - 1;
        const betGame = draft.betGames.find(betGame => betGame.index === action.gameIndex);
        switch (action.betType) {
          case "bet1X":
            betGame.bet1X.status = false;
            break;
          case "betX":
            betGame.betX.status = false;
            break;
          case "bet2X":
            betGame.bet2X.status = false;
            break;
          case "handicap_0":
            betGame.handicap_0.status = false;
            break;
          case "handicap_1":
            betGame.handicap_1.status = false;
            break;
          case "over":
            betGame.over.status = false;
            break;
          case "under":
            betGame.under.status = false;
            break;
          default:
            break;
        }
      });
    default:
      return state
  }
}

export default reducer;