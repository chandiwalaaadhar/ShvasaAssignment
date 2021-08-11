import React, { useState } from "react";
import Card from "./Card";
import Placeholder from "../../assets/demoImg.jpeg";
import classes from "./MusicDataCard.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../../Store";
import { getViewPlaylist } from "../../Store/dataSlice";

export default function MusicDataCard(props) {
  const [play, setPlay] = useState(false);
  const dispatch = useDispatch();
  const bool = useSelector(getViewPlaylist);
  const mouseOverHandler = () => {
    setPlay(true);
  };
  const mouseDownHandler = () => {
    setPlay(false);
  };

  const onAddHandler = (title) => {
    dispatch(dataActions.setPlaylist({ title }));
  };

  return (
    <Card
      className={classes.music_card}
      onMouseOver={mouseOverHandler}
      onMouseDown={mouseDownHandler}
    >
      <img src={Placeholder} alt={props.title}></img>
      {play && <div className={classes.play_toggle}>Play</div>}
      {bool === false ? (
        <div
          className={classes.add_to_playlist}
          onClick={() => onAddHandler(props.title)}
        >
          Add
        </div>
      ) : (
        <div></div>
      )}
      <p>{props.title}</p>
    </Card>
  );
}
