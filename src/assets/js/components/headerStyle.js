const headerStyle = {
  appBar: {
    backgroundColor: "transparent",
    boxShadow: "none",
    position: "static",    
  },
  container: {
    flex: "1",
    justifyContent: "space-between",
    margin: "20px 0",
    "@media (max-width: 990px)": {
      margin: "10px 0",
    }
  },
  brand: {
    maxWidth: "200px",
    "@media (max-width: 540px)": {
      width: "150px",
    }
  },
  right: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  btnSearch: {
    color: "#F2F2F2",
    "&:hover,&:focus": {
      backgroundColor: "transparent",
      outline: "none",
    }    
  },
  modalSearch: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: "30px"
  },
  search: {
    backgroundColor: "transparent",
    border: "none",
    borderBottom: "1px solid #F2F2F2",
    borderRadius: 0,
    color: "#F2F2F2",      
    "&:hover,&:focus": {      
      outline: "none",
    },
  },
  btnMenu: {
    color: "#ffffff",
    "&:hover,&:focus": {
      backgroundColor: "transparent",
      outline: "none",
    },
  },
  hideMenu: {
    margin: "-16px 15px 10px 0",
    "@media (max-width: 540px)": {
      margin: "-16px 5px 10px 0",
    }
  },
};
export default headerStyle;
