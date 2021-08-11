import React from "react";
import { useSelector } from "react-redux";
import { getMyPlaylist } from "../../Store/dataSlice";
import classes from "./PlaylistDetails.module.scss";
import MusicDataCard from "../UI/MusicDataCard";
export default function PlaylistDetails() {
  const playlist = useSelector(getMyPlaylist);
  return (
    <div className={classes.card_container}>
      {playlist.map((release, index) => (
        <MusicDataCard key={release.barcode + index} title={release.title} />
      ))}
    </div>
  );
}
