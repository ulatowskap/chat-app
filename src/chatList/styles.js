const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: "calc(100% - 35px)",
    position: "absolute",
    left: "0",
    width: "300px",
    boxShadow: "0px 0px 2px black",
  },
  listItem: {
    cursor: "pointer",
  },
  newChatBtn: {
    backgroundColor: "#8e24aa",
    color: "white",
    position: "fixed",
    borderRadius: "50%",
    padding: "30px 10px",
    bottom: "10%",
    marginLeft: "70px",
  },
  unreadMessage: {
    color: "red",
    position: "absolute",
    top: "0",
    right: "5px",
  },
});

export default styles;
