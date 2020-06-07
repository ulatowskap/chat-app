import { Link } from "react-router-dom";
import React from "react";
import styles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";

class mainViewComponent extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <main className={classes.main}>
        <h1 className={classes.h1}>za-Czatuj-się</h1>
        <h2 className={classes.h2}>
          Najlepsza aplikacja do czatu ze znajomymi
        </h2>
        <img
          className={classes.img}
          alt="foto"
          src="https://cdn.pixabay.com/photo/2019/10/31/21/32/girl-4592925_1280.jpg"
        ></img>
        <Link className={classes.logInLink} to="/signup">
          Zarejestruj się!
        </Link>
        <Link className={classes.logInLink} to="/login">
          Masz już konto? Zaloguj się!
        </Link>
      </main>
    );
  }
}

export default withStyles(styles)(mainViewComponent);
