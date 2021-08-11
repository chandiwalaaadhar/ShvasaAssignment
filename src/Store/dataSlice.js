import { createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../Constants";

const initialState = {
  sessionToken: null,
  musicData: null,
  playlist: [],
  viewPlaylist: false,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setToken(state, action) {
      state.sessionToken = action.payload;
    },
    setMusicData(state, action) {
      state.musicData = action.payload;
    },
    setPlaylist(state, action) {
      state.playlist.push(action.payload);
    },
    setViewPlaylist(state, action) {
      state.viewPlaylist = !state.viewPlaylist;
    },
  },
});

export const fetchMusicData = () => {
  const endpoint = BASE_URL;
  var baseUrl = new URL(endpoint);
  const params = {
    artist: "65f4f0c5-ef9e-490c-aee3-909e7ae6b2ab",
    fmt: "json",
  };
  baseUrl.search = new URLSearchParams(params).toString();
  return async (dispatch) => {
    const getMusicDataCall = async () => {
      const response = await fetch(baseUrl);
      if (!response.ok) {
        throw new Error("something went wrong");
      }
      const data = response.json();
      return data;
    };
    try {
      const musicData = await getMusicDataCall();

      if (musicData.code === 401) {
        await dispatch();
      } else {
        console.log(musicData);
        await dispatch(dataSlice.actions.setMusicData(musicData));
        //await dispatch(uiSlice.actions.setCourses(coursesData.data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getSessionToken = (state) => state.data.sessionToken;
export const getMusicData = (state) => state.data.musicData;
export const getViewPlaylist = (state) => state.data.viewPlaylist;
export const getMyPlaylist = (state) => state.data.playlist;
export default dataSlice;
