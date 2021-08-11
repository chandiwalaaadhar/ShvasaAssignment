import React, { useEffect } from "react";
import { getSessionToken } from "../../Store/dataSlice";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginCard from "../Functionalities/LoginCard";

export default function LoginScreen() {
  const token = useSelector(getSessionToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.replace("/home");
    } else if (token === null) {
      history.replace("/");
    }
  }, [token, history]);
  return <LoginCard />;
}
