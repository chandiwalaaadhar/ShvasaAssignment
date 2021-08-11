import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../../Store";
import { fetchMusicData, getMusicData } from "../../Store/dataSlice";
import MusicDataCard from "../UI/MusicDataCard";
import classes from "./MusicDetails.module.scss";
export default function MusicDetails() {
  const dispatch = useDispatch();
  const musicData = useSelector(getMusicData);
  useEffect(() => {
    dispatch(fetchMusicData());
    return () => {
      dispatch(dataActions.setMusicData(null));
    };
  }, [dispatch]);
  return (
    musicData && (
      <div className={classes.card_container}>
        {musicData.releases.map((release, index) => (
          <MusicDataCard key={release.barcode + index} title={release.title} />
        ))}
      </div>
    )
  );
}
