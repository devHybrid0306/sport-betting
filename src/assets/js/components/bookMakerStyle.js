const bookMakerStyle = {
  container: {
    backgroundColor: "#1A404F",
    borderRadius: "20px",
    padding: "2rem",
    boxShadow: "0 3rem 6rem rgba(1, 3, 38, 0.5)",
    marginBottom: "2rem",
    "@media (max-width: 600px)": {
      padding: "1rem",
    }
  },
  tabMenu: {
    borderBottom: "1px solid #1DA885",
    paddingBottom: "1rem",
    flexWrap: "nowrap",
    overflowX: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    }
  },
  tabItem: {
    marginRight: "1rem",
    "@media (max-width: 600px)": {
      marginRight: "0.2rem",
    },
  },
  tabLink: {
    color: "#F2F2F2",
    fontSize: "1.875rem",
    padding: "0.5rem",
    "@media (max-width: 600px)": {
      fontSize: "1.1rem"
    },
  },
  tabActive: {
    display: "block",
    backgroundColor: "#1DA885",
    boxShadow: "0 0 10px #198F71",
    borderRadius: "10px !important",
    padding: "10px",
    height: "50px",
    width: "50px",
    "@media (max-width: 600px)": {
      padding: "0.5rem",
      height: "2.1rem",
      width: "2.1rem",
    }
  },
  tabUnActive: {
    display: "block",
    backgroundColor: "transparent",
    padding: "10px",
    height: "50px",
    width: "50px",
    "@media (max-width: 600px)": {
      padding: "0.5rem",
      height: "2.1rem",
      width: "2.1rem",
    }
  },
  tabPanel: {
    border: "none",
  },
  table: {
    width: "100%",
    marginBottom: 0,
  },
  tableHead: {
    padding: 0,
  },
  tableHeadItem: {
    padding: 0,
    border: "none",
    color: "#F2F2F2",
    fontSize: "0.7rem",
  },
  tableHeadScore: {
    fontSize: "0.85rem",
    "@media (max-width: 1024px)": {
      paddingLeft: "0.3rem !important",
    }
  },
  tableBodyRow: {
    "&:nth-child(odd)": {
      backgroundColor: "#062633",
    },
  },
  tableBodyCell: {
    padding: "1rem 0",
    border: "none",
    textAlign: "center",
    verticalAlign: "middle",
    "&:first-child": {
      borderTopLeftRadius: "20px",
      borderBottomLeftRadius: "20px",
    },
    "&:last-child": {
      borderTopRightRadius: "20px",
      borderBottomRightRadius: "20px",
    },
    "@media (max-width: 768px)": {
      "&:nth-of-type(6)": {
        borderTopRightRadius: "20px",
        borderBottomRightRadius: "20px",
      }
    },
    "@media (max-width: 1024px)": {
      "&:nth-of-type(3)": {
        borderTopLeftRadius: "20px !important",
        borderBottomLeftRadius: "20px !important",
      }
    },
    "@media (min-width: 990px) and (max-width: 1200px)": {
      "&:nth-of-type(6)": {
        borderTopRightRadius: "20px",
        borderBottomRightRadius: "20px",
      },
    },
    "@media (min-width: 1200px) and (max-width: 1330px)": {
      "&:nth-of-type(7)": {
        borderTopRightRadius: "20px",
        borderBottomRightRadius: "20px",
      }
    }
  },
  time: {
    color: "#F2F2F2",
    fontEeight: "bold",
    fontSize: "1.2rem",
    marginBottom: 0,
    marginLeft: "1rem",
    "@media (max-width: 1024px)": {
      display: "none",
    }
  },
  date: {
    color: "#F2F2F2",
    fontEeight: "lighter",
    fontSize: "0.8rem",
    marginBottom: 0,
    marginLeft: "1rem",
    "@media (max-width: 1024px)": {
      display: "none",
    }
  },
  teamsLogo: {
    position: "relative",
    "@media (max-width: 1030px)": {
      display: "none",
    }
  },
  hostTeam: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    border: "1px solid #CDCBCB",
    display: "inline-block",
    textAlign: "center",
    paddingTop: "4px",
    backgroundColor: "#fff",
    zIndex: "2",
    position: "relative",
    left: "10px",
  },
  guestTeam: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    border: "1px solid #CDCBCB",
    display: "inline-block",
    textAlign: "center",
    paddingTop: "4px",
    backgroundColor: "#fff",
  },
  teamLogoImg: {
    width: "30px",
    height: "30px",
  },
  playingTeams: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontsize: "0.85rem",  
    "@media (max-width: 1024px)": {
      paddingLeft: "0.3rem !important",
    }
  },
  score: {
    "&:last-of-type": {
      borderRight: "1px solid #F2F2F2",
      paddingRight: "0.8rem"
    },
    "@media (max-width: 520px)": {
      fontSize: "0.625rem",
    },
    "@media (min-width: 520px) and (max-width: 990px)": {
      fontSize: "0.8rem",
    }
  },
  teamName: {
    color: "#F2F2F2",
    fontWeight: "lighter",
    textAlign: "left",
  },
  scoreValue: {
    color: "#F2F2F2",
    fontWeight: "lighter",
  },
  simpleBet: {
    "@media (max-width: 520px)": {
      padding: "0.8rem 0.2rem !important",
    }
  },
  handicap: {
    fontSize: "0.85rem",
    "@media (max-width: 768px)": {
      display: "none",
    },
    "@media (min-width: 990px) and (max-width: 1200px)": {
      display: "none",
    }
  },
  over_under: {
    fontSize: "0.85rem",
    "@media (max-width: 768px)": {
      display: "none",
    },
    "@media (min-width: 990px) and (max-width: 1200px)": {
      display: "none",
    },
    "@media (min-width: 990px) and (max-width: 1332px)": {
      display: "none",
    }
  },
  btnSort: {
    minWidth: "20px",
    padding: 0,
    color: "#21C299",
    "&:focus": {
      boxShadow: "none",
    }
  }
};
export default bookMakerStyle;
