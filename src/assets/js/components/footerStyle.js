const footerStyle = {
  footer: {
    margin: "0 -3rem 0.5rem -3rem",
    borderTop: "1px solid #21C299",
    borderBottom: "1px solid #21C299",
    "@media (max-width: 767px)": {
      margin: "0 -0.5rem 0.5rem -0.5rem",
    }
  },
  list: {    
    borderTop: "1px solid #21C299",
    borderBottom: "1px solid #21C299",
    margin: "0.3rem 0",
    alignItems: "center",
    justifyContent: "center",
  },   
  linkItem: {
    margin: "0.5rem 1rem",
    color: "#F2F2F2",
    textTransform: "uppercase",
    "&:hover,&:focus": {
      textDecoration: "none", 
      color: "#F2F2F2",
    }
  },
};
export default footerStyle;
