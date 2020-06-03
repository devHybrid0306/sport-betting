const homePageStyle = {
  container: {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%",
  },
  btnSignIn: {
    borderColor: "#1DA885",
    color: "#1DA885",
    borderRadius: "25px",
    borderWidth: "2px",
    padding: "0.5rem 2rem",
    marginBottom: "2rem",
    "@media (min-width: 540px)": {
      fontSize: "1.56rem",
    },
    "&:hover": {
      color: "#F2F2F2",
      backgroundColor: "#1DA885",
      transition: "all 0.8s ease-in-out",
    },
    "&:focus": {
      boxShadow: "none",      
      outline: "none",      
    }
  },
  betSlip: {
    "@media (max-width: 990px)": {
      padding: 0,
    },
    "&:focus": {
      outline: "none",
    }
  },
  btnBetSlip: {    
    "&,&:focus": {
      position: "fixed",
      bottom: 0,      
      width: "12rem",
      height: "4rem",
      left: "calc(50 % - 5rem)",
      padding: "0 28px",
      backgroundColor: "#21C299",
      borderRadius: "10px 10px 0 0",
      color: "#1A404F",
      fontWeight: "600",
      fontSize: "1.2rem",
      boxShadow: "0 3px 6px #21C299",
      outline: "none",
      "@media (min-width: 990px)": {
        display: "none",
      }
    },
    "&:hover": {
      position: "fixed",
      bottom: 0,
      width: "12rem",
      height: "4rem",
      left: "calc(50 % - 5rem)",
      padding: "0 28px",
      backgroundColor: "#21C299",
      borderRadius: "10px 10px 0 0",
      color: "#212529",
      fontWeight: "600",
      fontSize: "1.2rem",
      boxShadow: "0 3px 6px #21C299",
      outline: "none",
    },
  },
  slipsCounter: {
    "&,&:focus": {
      fontWeight: "500",
      fontSize: "12px",
      marginLeft: "5px",
      backgroundColor: "#1A404F",
      color: "#F2F2F2",
      width: "20px",
      height: "20px",      
    },    
  },
  modal: {
    display: 'flex',    
    justifyContent: 'center',
    overflowX: "scroll",
    paddingTop: "5%",    
  },
};
export default homePageStyle;
