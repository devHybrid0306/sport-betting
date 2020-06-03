const bettingBoardStyle = {
  tabMenu: {
    display: "flex",
    justifyContent: "space-between",
  },
  tabItem: {
    width: "45%",
    textAlign: "center",
    marginBottom: "1rem",
    "@media (min-width: 768px)": {
      width: "24%",
    }
  },
  tabLink: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#045955",
    boxShadow: "0 3px 6px rgba(1, 3, 38, 0.5)",
    borderRadius: "15px",
    height: "3rem",
    color: "#F2F2F2",
    padding: "0.5rem",
    "@media (max-width: 520px)": {
      fontSize: "0.85rem",
    },
    "@media (min-width: 990px) and (max-width: 1200px)": {
      fontSize: "0.75rem",
    }
  },
  activeTabLink: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#21C299",
    boxShadow: "0 3px 6px rgba(1, 3, 38, 0.5)",
    borderRadius: "15px",
    height: "3rem",
    color: "#F2F2F2",
    padding: "0.5rem",
    "@media (max-width: 520px)": {
      fontSize: "0.85rem",
    },
    "@media (min-width: 990px) and (max-width: 1200px)": {
      fontSize: "0.75rem",
    }
  },
  betContainer: {
    display: "flex",
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: "#1A404F",
    borderRadius: "20px",
    paddingTop: "1rem",
    boxShadow: "0 3px 6px rgba(1, 3, 38, 0.5)",
  },
};
export default bettingBoardStyle;
