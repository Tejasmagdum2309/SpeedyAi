import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topSongs: [
    { song: "Blinding Lights", streams: 150000 },
    { song: "Levitating", streams: 120000 },
    { song: "Save Your Tears", streams: 100000 },
    { song: "Peaches", streams: 90000 },
    { song: "Stay", streams: 85000 }
  ]
};

const topSongsSlice = createSlice({
  name: "topSongs",
  initialState,
  reducers: {
    updateTopSongs: (state, action) => {
      state.topSongs = action.payload;
    }
  }
});

export const { updateTopSongs } = topSongsSlice.actions;
export default topSongsSlice.reducer;
