import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import Icon from "./Icon.js";

import { useRouter } from "next/router";

// import useStyles from "./styles";
import Input from "./Input";

const Auth = () => {
  const router = useRouter();
  // const classes = useStyles();
  const [isSignUp, setisSignUp] = useState(false);
  const [Showpassword, setShowpassword] = useState(false);
  let username;
  // if (typeof window !== 'undefined') {
  //   username = localStorage.getItem('path')

  // }

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const handleChange = () => {};

  const handleShowPassword = () =>
    setShowpassword((prevShowPassword) => !prevShowPassword);

  const switchMode = () => {
    setisSignUp((prevState) => !prevState);
    handleShowPassword(false);
  };

  const GoogleSuccess = async (res) => {
    const username = res.profileObj.name;
    if (typeof window !== "undefined") {
      localStorage.setItem("username", username);
    }
    const googleID = res.googleId;

    console.log(username);
    localStorage.setItem("profile", JSON.stringify({ username, googleID }));
    console.log(res);
    router.push("/");
  };

  const GoogleFailure = () => {
    console.log("Google Sign in failed.Please Try Again Later");
  };

  return (
    // <Container component="main" maxWidth="xs">
    //   <Paper className={classes.paper} elevation={3}>
    //     <Avatar className={classes.avatar}>
    //       <LockOutlined />
    //     </Avatar>
    //     <Typography variant="h5">{isSignUp ? "Sign Up" : "Sign In"}</Typography>
    //     <form className={classes.form} onSubmit={SubmitHandler}>
    //       <Grid container spacing={2}>
    //         {isSignUp && (
    //           <>
    //             <Input
    //               name="First Name"
    //               label="First Name"
    //               handleChange={handleChange}
    //               autoFocus
    //               half
    //             />
    //             <Input
    //               name="last Name"
    //               label="Last Name"
    //               handleChange={handleChange}
    //               half
    //             />
    //           </>
    //         )}
    //         <Input
    //           name="email"
    //           label="email"
    //           handleChange={handleChange}
    //           type="email"
    //         />

    //         <Input
    //           name="password"
    //           label="password"
    //           handleChange={handleChange}
    //           type={Showpassword ? "text" : "password"}
    //           handleShowPassword={handleShowPassword}
    //         />

    //         {isSignUp && (
    //           <Input
    //             name="confirmPassword"
    //             label="Repeat Password"
    //             handleChange={handleChange}
    //             type="password"
    //           />
    //         )}
    //       </Grid>
    //       <Button
    //         disabled
    //         variant="contained"
    //         type="submit"
    //         fullWidth
    //         color="primary"
    //         className={classes.submit}
    //       >
    //         Sign In disabled please use Google Sign in
    //       </Button>

    //       <GoogleLogin
    //         clientId="377386531731-nfueq28h4q7r4sdmbie5ej72928e45bj.apps.googleusercontent.com"
    //         render={(renderProps) => (
    //           <Button
    //             variant="contained"
    //             color="primary"
    //             onClick={renderProps.onClick}
    //             className={classes.googleButton}
    //             fullWidth
    //             disabled={renderProps.disabled}
    //             startIcon={<Icon />}
    //           >
    //             Sign in With Google
    //           </Button>
    //         )}
    //         onSuccess={GoogleSuccess}
    //         onFailure={GoogleFailure}
    //         cookiePolicy="single_host_origin"
    //       />

    //       <Grid container justifyContent="flex-end">
    //         <Grid item>
    //           <Button onClick={switchMode}>
    //             {isSignUp
    //               ? "Already have an Account? Sign In"
    //               : "Don't have an Account? Sign Up"}
    //           </Button>
    //         </Grid>
    //       </Grid>
    //     </form>
    //   </Paper>
    // </Container>

    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form className="login">
            <div className="login__field">
              <i className="login__icon fas fa-user" />
              <input
                type="text"
                className="login__input"
                placeholder="User name / Email"
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock" />
              <input
                type="password"
                className="login__input"
                placeholder="Password"
              />
            </div>
            <button className="button login__submit">
              <span className="button__text">Log In Now</span>
              <i className="button__icon fas fa-chevron-right" />
            </button>
            <GoogleLogin
              clientId="377386531731-nfueq28h4q7r4sdmbie5ej72928e45bj.apps.googleusercontent.com"
              render={(renderProps) => (
                <button
                  onClick={renderProps.onClick}
                  className="button login__submit"
                  disabled={renderProps.disabled}
                  startIcon={<Icon />}
                >
                  Sign in With Google
                </button>
              )}
              onSuccess={GoogleSuccess}
              onFailure={GoogleFailure}
              cookiePolicy="single_host_origin"
            />
          </form>
        </div>
        <div class="screen__background">
          <span class="screen__background__shape screen__background__shape4"></span>
          <span class="screen__background__shape screen__background__shape3"></span>
          <span class="screen__background__shape screen__background__shape2"></span>
          <span class="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
};

export default Auth;
