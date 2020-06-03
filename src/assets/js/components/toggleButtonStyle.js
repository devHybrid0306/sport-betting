const toggleButtonStyle = {
  inactive: {
    minWidth: "3rem",
    backgroundColor: "#F2F2F2",
    color: "#083040",
    width: "4rem",
    padding: "0.6rem 0",
    borderRadius: "15px",
    border: "1px solid transparent",
    fontWeight: "bold",
    "@media (max-width: 990px)": {
      width: "3rem",
      fontSize: "0.8rem",
      borderRight: "5px",
      padding: "0.7rem 0",
    },
    "@media (min-width: 520px) and (max-width: 768px)": {
      width: "4rem",
    },
    "&:hover": {
      backgroundColor: "#F2F2F2",
      color: "#083040",
      border: "1px solid #21C299",
      boxShadow: "inset 0 0 10px 0 #21C299",
    },
    "&:focus": {
      outline: "none",
    },
  },
  active: {
    minWidth: "3rem",
    boxShadow: "none",  
    backgroundColor: "#21C299",
    color: "#F2F2F2",
    width: "4rem",
    padding: "0.6rem 0",
    borderRadius: "15px",
    border: "1px solid transparent",
    fontWeight: "bold",
    "@media (max-width: 990px)": {
      width: "3rem",
      fontSize: "0.8rem",
      borderRight: "5px",
      padding: "0.7rem 0",
    },
    "@media (min-width: 520px) and (max-width: 768px)": {
      width: "4rem",
    },
    "&:hover": {
      backgroundColor: "#21C299",
      color: "#F2F2F2",
      border: "1px solid #21C299",
      boxShadow: "inset 0 0 10px 0 #21C299",
    },
    "&:focus": {
      outline: "none",
    },    
  },
};
export default toggleButtonStyle;
