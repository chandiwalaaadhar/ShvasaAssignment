import React from "react";
import { useSelector } from "react-redux";
import { getViewPlaylist } from "../../Store/dataSlice";
import MusicDetails from "../Functionalities/MusicDetails";
import PlaylistDetails from "../Functionalities/PlaylistDetails";

import classes from "./Home.module.scss";
export default function Home() {
  const bool = useSelector(getViewPlaylist);
  return (
    <div className={classes.home}>
      <div className={classes.content_container}>
        <h2 className={classes.title}>For your Listening Pleasures</h2>
        {bool === false ? <MusicDetails /> : <PlaylistDetails />}
      </div>
    </div>
  );
}
