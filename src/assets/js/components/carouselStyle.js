const carouselStyle = {
  container: {
    position: "relative",
    display: "none",
  },
  mobileContainer:{
    marginBottom: "30px",
  },
  carousel: {
    alignItems: "center",
    display: "flex",
    height: "600px",
    margin: "0 auto",
    position: "relative",
    maxWidth: "1200px",
  },
  mobileCarousel: {
    alignItems: "center",
    display: "flex",
    height: "600px",
    margin: "0 auto",
    position: "relative",
    "@media (min-width: 540px)": {
      minWidth: "400px",
    },   
    "@media (max-width: 540px)": {
      height: "450px",
    } 
  },
  btnPrev: {
    position: "absolute",
    left: "-5%",   
    "&:focus": {
      outline: "none",
    },
    "&:before": {   
      display: "inline-block",   
      height: "4px",
      width: "4px",   
      left: "-10px",
      top: 0,
      position: "absolute",
      transform: "rotate(135deg) translateY(-50%)",
      transition: "left 0.15s ease-in-out",
    },
    "&:before::hover": {
      left: "-18px",
    }
  },  
  btnNext: {
    position: "absolute",
    right: "-5%", 
    "&:focus": {
      outline: "none",
    },
    "&:before": {      
      display: "inline-block",
      height: "4px",
      width: "4px",
      right: "-10px",
      top: 0,
      position: "absolute",
      transform: "rotate(135deg) translateY(-50%)",
      transition: "left 0.15s ease-in-out",
    },
    "&:before::hover": {
      right: "-18px",
    },
  },
  btnIcon: {
    width: "30px",
    height: "30px",
    "@media(max-width: 600px)": {
      width: "20px",
      height: "20px",
    }
  },
  card: {
    position: "absolute",
    top: 0,
    left: "50%",
  }
};
export default carouselStyle;
