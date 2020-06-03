const betButtonStyle = {
  btnBet: {
    justifyContent: "space-between",
    textTransform: "none",
    backgroundColor: "#F2F2F2",
    borderRadius: "15px",
    textAlign: "left",
    color: "#083040",
    padding: "0.75rem 1rem",
    width: "100%",
    marginBottom: "1rem",
    "&:hover": {
      backgroundColor: "#F2F2F2",
      color: "#083040",
    },
    "&:focus": {      
      outline: "none",
      boxShadow: "none",
    },
    "@media (min-width: 990px) and (max-width: 1200px)": {
      fontSize: "0.75rem",
    }
  },
  betValue: {
    color: "#21C299",
  },
};
export default betButtonStyle;
