import React from "react";
import { Link } from "react-router-dom";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import styles from "./styles";
const firebase = require("firebase");

class SignupComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      passwordConfirmation: null,
      signupError: "",
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <main className={classes.main}>
        <CssBaseline></CssBaseline>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5">
            Zarejestruj się!
          </Typography>
          <form onSubmit={(e) => this.submitSignUp(e)} className={classes.form}>
            <FormControl required fullWidth margin="normal">
              <InputLabel htmlFor="signup-email-input">Twój mail</InputLabel>
              <Input
                onChange={(e) => this.userTyping("email", e)}
                autoFocus
                id="signup-email-input"
              ></Input>
            </FormControl>
            <FormControl required fullWidth margin="normal">
              <InputLabel htmlFor="signup-password-input">
                Wprowadź hasło
              </InputLabel>
              <Input
                type="password"
                id="signup-password-input"
                onChange={(e) => this.userTyping("password", e)}
              ></Input>
            </FormControl>

            <FormControl required fullWidth margin="normal">
              <InputLabel htmlFor="signup-password-confirmation-input">
                Powtórz hasło
              </InputLabel>
              <Input
                type="password"
                id="signup-password-confirmation-input"
                onChange={(e) => this.userTyping("passwordConfirmation", e)}
              ></Input>
            </FormControl>
            <Button
              type="submit"
              fullwidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {" "}
              Potwierdź
            </Button>
          </form>
          {this.state.signupError ? (
            <Typography
              className={classes.errorText}
              component="h5"
              variant="h6"
            >
              {this.state.signupError}
            </Typography>
          ) : null}
          <Typography
            component="h5"
            variant="h6"
            className={classes.hasAccountHeader}
          >
            Masz już konto?
          </Typography>
          <Link className={classes.logInLink} to="/login">
            Zaloguj się!
          </Link>
        </Paper>
      </main>
    );
  }

  formIsValid = () => this.state.password === this.state.passwordConfirmation;

  userTyping = (type, e) => {
    switch (type) {
      case "email":
        this.setState({
          email: e.target.value,
        });
        break;

      case "password":
        this.setState({
          password: e.target.value,
        });
        break;

      case "passwordConfirmation":
        this.setState({
          passwordConfirmation: e.target.value,
        });
        break;

      default:
        break;
    }
  };

  submitSignUp = (e) => {
    e.preventDefault();
    if (!this.formIsValid()) {
      this.setState({ signupError: "Password do not match" });
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(
        (authRes) => {
          const userObj = {
            email: authRes.user.email,
          };
          firebase
            .firestore()
            .collection("users")
            .doc(this.state.email)
            .set(userObj)
            .then(
              () => {
                this.props.history.push("/dashboard");
              },
              (dbErr) => {
                console.log(dbErr);
                this.setState({ signupError: "Failed to add user" });
              }
            );
        },
        (authErr) => {
          console.log(authErr);
          this.setState({ signupError: "Failed to add user" });
        }
      );
  };
}

export default withStyles(styles)(SignupComponent);
