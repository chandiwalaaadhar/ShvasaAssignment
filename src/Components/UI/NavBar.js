import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../../Store";
import { getViewPlaylist } from "../../Store/dataSlice";
import classes from "./Navbar.module.scss";

export default function NavBar() {
  const dispatch = useDispatch();
  const openPlaylistHandler = () => {
    dispatch(dataActions.setViewPlaylist());
  };
  const bool = useSelector(getViewPlaylist);

  return (
    <div className={classes.nav_container}>
      <div className={classes.button} onClick={openPlaylistHandler}>
        {bool === false ? "Playlists" : "Home"}
      </div>
    </div>
  );
}
