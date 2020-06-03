const sideBarStyle = {
  container: {
    zIndex: 3,
    "@media (max-width: 990px)": {
      marginBottom: "1rem",
    }
  },
  sideBar: {
    display: "flex",
    flexDirection: "row",
    overflow: "auto",
    padding: "1rem",
    backgroundColor: "#1A404F",
    borderRadius: "20px",
    transition: "all 0.2s",
    flexWrap: "nowrap",
    // overflowX: "scroll",
    "@media (min-width: 990px)": {
      width: "5rem",
    }
  },
  openedBar: {
    width: "20rem",
    backgroundColor: "rgba(26, 64, 79, 0.9)",
  },  
  btnSideBarToggle: {
    display: "none",
    color: "#21C299",
    fontSize: "2rem",
    padding: 0,
    marginLeft: "0.5rem",
    textAlign: "left",
    marginRight: "auto",
    "&:focus": {
      outline: "none",
      boxShadow: "none",
    }
  },
  tabItem: {
    margin: "0.7rem 0",
    "@media (max-width: 520px)": {
      margin: 0,
    },
    "@media (min-width: 520px) and (max-width: 990px)": {
      margin: "0 0.5rem",
    },
    "&:last-of-type": {
      marginBottom: 0,
    }
  },
  tabLink: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    color: "#F2F2F2",
    fontSize: "1.875rem",
    padding: "0.5rem",
    "@media (max-width: 600px)": {
      fontSize: "1.1rem"
    },
  },
  activeTabLink: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    backgroundColor: "#1DA885",
    boxShadow: "0 0 10px #198F71",
    borderRadius: "10px !important",
    color: "#F2F2F2",
    fontSize: "1.875rem",
    padding: "0.5rem",
    "@media (max-width: 600px)": {
      fontSize: "1.1rem"
    },
  },
  tabImg: {
    display: "block",
    textAlign: "center",
    width: "30px",
    height: "30px",
    "@media (max-width: 600px)": {
      width: "1.1rem",
      height: "1.1rem",
    }
  }, 
  sportName: {
    fontSize: "20px",
    color: "#F2F2F2",
    fontWeight: "200",
    display: "inline-block",
  },
  activeSportName: {
    fontSize: "20px",
    color: "#1A404F",
    fontWeight: "500",
    display: "inline-block",
  },  
  badge: {
    fontSize: "1rem",
    color: "#F2F2F2",
    fontWeight: "normal",
    display: "inline-block",
  },
  activeBadge: {
    fontSize: "1rem",
    color: "#1A404F",
    fontWeight: "500",
    display: "inline-block",
  },  
};
export default sideBarStyle;
