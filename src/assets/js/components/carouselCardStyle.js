const carouselCardStyle = {
  card: {
    transform: "translateX(-50%)",
    position: "absolute",
    transition: "all 0.3s ease-in-out",
    backgroundColor: "#F2F2F2",
    borderRadius: "20px",
    border: "none",
    boxShadow: "0 3px 6px 0 rgba(18, 154, 134, 1)",
  },
  card_select: {
    height: "550px",
    opacity: "1",
    left: "50%",
    zIndex: 2,
    padding: "2rem",
    "@media (max-width: 540px)": {
      height: "400px",
      transition: "all 0.3s ease-in-out",
    }
  },
  card_prev: {
    height: "500px",
    opacity: "1",
    left: "30%",
    zIndex: 1,
    padding: "1.5rem 2rem",
  },
  card_next: {
    height: "500px",
    opacity: "1",
    left: "70%",
    zIndex: 1,
    padding: "1.5rem 2rem",
  },
  card_first: {
    height: "400px",
    opacity: ".4",
    left: "15%",
    zIndex: 0,
    padding: "1.5rem 2rem",
    "@media (max-width: 990px)": {
      display: "none",
    },
  },
  card_last: {
    height: "400px",
    opacity: ".4",
    left: "85%",
    zIndex: 0,
    padding: "1.5rem 2rem",
  },
  cardHeader: {
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "none",
    padding: 0,
    marginBottom: "1.25rem",
    "@media (max-width: 540px)": {
      marginBottom: "0.5rem",
    }
  },
  cardHeader_low: {
    marginBottom: "0.5rem",
  },
  time: {
    color: "#1A404F",
    fontWeight: "bold",
    marginBottom: 0,
  },
  time_low: {
    fontSize: "1.5rem",
  },
  time_mid: {
    fontSize: "1.7rem",
  },
  time_high: {
    fontSize: "2rem",
    "@media (max-width: 540px)": {
      fontSize: "1.5rem",
    }
  },
  day: {
    color: "#1A404F",
    fontWeight: "lighter",
    textTransform: "uppercase",
    marginBottom: 0,    
  },
  day_low: {
    fontSize: "0.9rem",
  },
  day_mid: {
    fontSize: "1.1rem",
  },
  day_high: {
    fontSize: "1.25rem",
    "@media (max-width: 540px)": {
      fontSize: "0.9rem",
    }
  },
  teamsLogo: {
    position: "relative",
  },
  hostTeam: {
    position: "absolute",
    zindex: 2,
    overflow: "hidden",
    borderRadius: "50%",
    border: "1px solid #CDCBCB",
    display: "inline-block",
    textAlign: "center",
    paddingTop: "4px",
    backgroundCcolor: "#fff",
  },
  hostTeam_low: {
    left: "-25px",
    width: "40px",
    height: "40px",
  },
  hostTeam_mid: {
    left: "-35px",
    width: "50px",
    height: "50px",
  },
  hostTeam_high: {
    left: "-45px",
    width: "60px",
    height: "60px",
    "@media (max-width: 540px)": {
      left: "-25px",
      height: "40px",
      width: "40px",
    }
  },
  guestTeam: {
    overflow: "hidden",
    borderRadius: "50%",
    border: "1px solid #CDCBCB",
    display: "inline-block",
    textAlign: "center",
    paddingTop: "4px",
    backgroundCcolor: "#fff",
  },
  guestTeam_low: {
    width: "40px",
    height: "40px",
  },
  guestTeam_mid: {
    width: "50px",
    height: "50px",
  },
  guestTeam_high: {
    width: "60px",
    height: "60px",
    "@media (max-width: 540px)": {
      height: "40px",
      width: "40px",
    }
  },
  teamLogoImg_low: {
    height: "30px",
    width: "30px",
  },
  teamLogoImg_mid: {
    height: "40px",
    width: "40px",
  },
  teamLogoImg_high: {
    height: "50px",
    width: "50px",
    "@media (max-width: 540px)": {
      height: "30px",
      width: "30px",
    }
  },
  cardBody: {
    padding: 0,
    marginBottom: "1.25rem",
  },
  gameImg: {
    maxWidth: "350px",
    borderRadius: "20px",
    boxShadow: "0 3px 6px 0 #CDCBCB",
    "@media (max-width: 540px)": {
      maxWidth: "210px",
    }
  },
  gameImg_low: {
    width: "270px",
  },
  gameType: {
    textTransform: "uppercase",
    color: "#CDCBCB",
    fontSize: "1rem",
    "@media (max-width: 540px)": {
      fontSize: "0.8rem",
      marginBottom: "0.1rem",
    }
  },
  gameType_low: {
    fontSize: "0.8rem",
    marginBottom: "0.1rem",
  },
  teamScore: {
    display: "flex",
    justifyContent: "space-between",
  },
  winnerTeam: {
    color: "#1A404F",
    fontSize: "1.56rem",
  },
  winnerTeam_low: {
    fontSize: "1rem",
    marginBottom: "0.6rem",
  },
  winnerTeam_mid: {
    fontSize: "1.2rem",
    marginBottom: "0.8rem",
  },
  winnerTeam_high: {
    fontSize: "1.56rem",
    "@media (max-width: 540px)": {
      fontSize: "1rem",
    }
  },
  loserTeam: {
    color: "#1A404F",
    fontWeight: "lighter",
  },
  loserTeam_low: {
    fontSize: "1rem",
    marginBottom: "0.6rem",
  },
  loserTeam_mid: {
    fontSize: "1.2rem",
    marginBottom: "0.8rem",
  },
  loserTeam_high: {
    fontSize: "1.56rem",
    "@media (max-width: 540px)": {
      fontSize: "1rem",
    }
  },
  cardFooter: {
    backgroundColor: "transparent",
    border: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 0,
  },
  btnSuccess: {
    backgroundColor: "#fff",
    borderRadius: "15px",
    padding: "0.375rem 0.65rem !important",
    color: "#129A86",
    borderColor: "#129A86",
  },
  btnSecondary: {
    backgroundColor: "#fff",
    borderRadius: "15px",
    padding: "0.375rem 0.65rem !important",
    color: "#CDCBCB",
    borderColor: "#CDCBCB",
  },
  btnDanger: {
    backgroundColor: "#fff",
    borderRadius: "15px",
    padding: "0.375rem 0.65rem !important",
    color: "#dc3545",
  },
  btn_low: {
    fontSize: "1rem",
    minWidth: "5rem",
  },
  btn_mid: {
    fontSize: "1.2rem",
    minWidth: "6rem",
  },
  btn_high: {
    fontSize: "1.25rem",
    minWidth: "7rem",
    "@media (max-width: 540px)": {
      fontSize: "10px",
      minWidth: "50px",
    }
  },
  oddValue: {
    fontWeight: "bold",
    marginLeft: "1rem",
  },
  oddSeocndaryValue: {
    fontWeight: "bold",
    marginLeft: "1rem",
    color: "black",
  }
};
export default carouselCardStyle;
