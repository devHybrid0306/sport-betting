const betSlipTicketStyle = {
  container: {
    backgroundColor: "#F2F2F2",
    borderRadius: "15px",
    padding: "1rem",
    boxShadow: "0 3px 6px #198F71",
    marginBottom: "1rem",
    position: "relative",
  },
  btnClose: {
    top: 0,
    right: "0.5rem",
    color: "#198F71",
    position: "absolute",
  },
  hostTeam: {
    marginBottom: "0.2rem",
  },
  teamLogoItem: {
    display: "inline-block",
    width: "25px",
    height: "25px",
    borderRadius: "50%",
    border: "1px solid #CDCBCB",
    textAlign: "center",
    backgroundColor: "#fff",
    marginRight: "0.5rem",
    paddingTop: "2px",
  },
  teamLogoImg: {
    width: "20px",
    height: "20px",
    verticalAlign: "top",
  },
  hostTeamName: {
    display: "inline-block",
    color: "#1A404F",
    fontSize: "0.9rem",
    marginBottom: 0,
    fontWeight: "lighter",
  },
  guestTeam: {
    marginBottom: "1rem",
    display: "inline-block",
  },
  guestTeamName: {
    display: "inline-block",
    color: "#1A404F",
    fontSize: "0.9rem",
    marginBottom: 0,
  },
  price: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1rem",
  },
  selectedTeam: {
    color: "#1A404F",
    fontSize: "1.1rem",
    marginBottom: 0,
  },
  selectedBet: {
    borderRadius: "15px",
    backgroundColor: "#1DA885",
    padding: "0 1rem",
    fontsize: "1.1rem",
    marginBottom: 0,
  },
  stakeWin: {
    display: "flex",
    justifyContent: "space-between",
  },
  inputStake: {
    minWidth: "20px",
    marginRight: "0.5rem",
    borderColor: "#1DA885",
    borderRadius: "15px",
    height: "auto",
    padding: "0.2rem 0.7rem",
    color: "#1A404F",
    "&::placeholder": {
      color: "#CDCBCB",
      textAlign: "center",
    },
    "&:focus": {
      boxShadow: "none",
      outline: "none",
    }
  },
  inputWin: {
    minWidth: "20px",
    marginLeft: "0.5rem",
    borderColor: "#1DA885",
    borderRadius: "15px",
    height: "auto",
    padding: "0.2rem 0.7rem",
    color: "#1A404F",
    "&::placeholder": {
      color: "#CDCBCB",
      textAlign: "center",
    },
    "&:focus": {
      boxShadow: "none",
      outline: "none",
    }
  },
};
export default betSlipTicketStyle;
