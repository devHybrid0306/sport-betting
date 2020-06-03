const betSlipStyle = {  
  card: {
    borderRadius: "20px",
    backgroundColor: "#1A404F",
    padding: "1rem",
    "@media (max-width: 540px)": {
      width: "270px",
    } 
  },
  cardHeaderLabel: {
    textAlign: "center",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    textTransform: "uppercase",
  },
  tabMenu: {
    backgroundColor: "#062633",
    border: "none",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1.5rem",
    marginLeft: "-1rem",
    marginRight: "-1rem",
    borderTop: "1px solid #1DA885",
    padding: "0 1rem",
  },
  tabLink: {
    padding: 0,
    "&:hover": {
      border: "none",
    }
  },
  tabActive: {
    marginBottom: 0,
    backgroundColor: "transparent",
    color: "#1DA885",
    borderBottom: "2px solid #1DA885",
    borderTop: "none",
    borderRight: "none",
    borderLeft: "none",
    fontWeight: "normal",
    borderRadius: 0,
    padding: "1rem 0.5rem",
    fontSize: "0.875rem",
    textTransform: "uppercase",
    "@media (min-width: 1200px) and (max-width: 1290px)": {
      fontSize: "0.785rem",
      padding: "1rem 0",
    },
  },
  tabUnActive: {
    marginBottom: 0,
    borderBottom: "2px solid transparent",
    color: "#1DA885",
    fontWeight: "lighter",
    borderRadius: 0,
    padding: "1rem 0.5rem",
    fontSize: "0.875rem",
    textTransform: "uppercase",
    "@media (min-width: 1200px) and (max-width: 1290px)": {
      fontSize: "0.785rem",
      padding: "1rem 0",
    },
  },
  cardBody: {
    maxHeight: "420px",
    overflowY: "scroll",
    paddingRight: "5px",
    "&::-webkit-scrollbar": {
      width: "6px",
      backgroundColor: "transparent",
      position: "absolute",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#21C299",
      borderRadius: "10px",
    }
  },
  cardBodyBackground: {
    color: "#F2F2F2",
    fontSize: "1.1rem",
    paddingTop: "1rem",
    textAlign: "center",
  },
  cardBodyImg:{
    marginBottom: "1rem",
    maxWidth: "100%",
    height: "auto",
  },
  cardBodyText:{
    "&:first-of-type": {
      color: "#21C299",
    }
  },
  cardFooter: {
    padding: "1.5rem 1rem 0 1rem",
    borderTop: "1px solid #21C299",
  },
  total: {
    display: "flex",
    justifyContent: "space-between",
  },
  amount: {
    fontSize: "1.1rem",
  },
  btnPlaceBet: {
    display: "block",
    color: "#21C299",
    fontSize: "1.5rem",
    padding: "0.5rem 3rem",
    backgroundColor: "#062633",
    boxShadow: "0 3px 6px #010326",
    borderRadius: "20px",
    width: "100%",
    "@media(min-width: 990px) and (max-width: 1024px)": {
      padding: "0.5rem 2rem",
      fontSize: "1.3rem"
    },
    "@media(min-width: 1200px) and (max-width: 1370px)": {
      padding: "0.5rem 2rem",
      fontSize: "1.3rem",
    },
    "&:hover": {
      backgroundColor: "#062633",
      outline: "none",
    },
    "&:focus": {
      boxShadow: "none",
    }
  }
};
export default betSlipStyle;
