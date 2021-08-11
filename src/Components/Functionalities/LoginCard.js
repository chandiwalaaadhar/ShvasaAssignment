import React from "react";
import Card from "../UI/Card";
import classes from "./LoginCard.module.scss";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import { dataActions } from "../../Store";

export default function LoginCard() {
  const dispatch = useDispatch();

  const responseGoogle = (response) => {
    dispatch(dataActions.setToken(response.accessToken));
  };

  return (
    <Card className={classes.login_container}>
      <div className={classes.heading}>Login</div>
      <GoogleLogin
        clientId="39487889090-1o54j3m26vvv2s3ru2f02g98c2eq4c9j.apps.googleusercontent.com"
        buttonText="Login Using Google"
        className={classes.google_login}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </Card>
  );
}
