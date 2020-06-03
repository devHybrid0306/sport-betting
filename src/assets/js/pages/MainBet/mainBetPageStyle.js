import image from "../../../img/basketball.png";

const mainBetPageStyle = {
  container: {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%",
  },  
  mainBetBoard: {
    marginBottom: "2rem",    
  },  
  mainBetHeader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundImage: "url(" + image + ")",
    backgroundSize: "cover",
    borderRadius: "20px",
    padding: "5rem 1rem",
    boxShadow: "0 3px 6px #010326",
    marginBottom: "2rem",
    "@media(max-width: 520px)": {
      padding: "3rem 1rem",
      marginBottom: "1rem",
    }
  },
  teamName: {
    textAlign: "center",
    color: "#F2F2F2",
    fontSize: "1rem",
    backgroundColor: "rgba(6, 38, 51, 0.7)",
    width: "12rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem 0",
    minHeight: "4rem",
    "&:first-of-type": {
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    "&:last-of-type": {
      borderBottomLeftRadius: "10px",
      borderBottomRightRadius: "10px",
    },
    "@media (min-width: 576px)": {
      "&:first-of-type": {
        borderTopLeftRadius: "10px",
        borderBottomLeftRadius: "10px",
        borderTopRightRadius: 0,
      },
      "&:last-of-type": {
        borderTopRightRadius: "10px",
        borderBottomRightRadius: "10px",
        borderBottomLeftRadius: 0,
      },
    },
    "@media (min-width: 576px) and (max-width: 1024px)": {
      fontSize: "0.85rem",
    },
  },
  dateTime: {
    color: "#F2F2F2",
    fontSize: "1rem",
    backgroundColor: "rgba(6, 38, 51, 0.7)",
    textAlign: "center",
    padding: "1.5rem 2rem",
    borderRadius: "10px",
    minHeight: "6rem",
    "@media (min-width: 576px) and (max-width: 1024px)": {
      fontSize: "0.85rem",
      padding: "1.5rem 1rem",
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
export default mainBetPageStyle;
