import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  heatmapData: [
    { day: "Monday", Morning: 2500, Afternoon: 5000, Evening: 11000, Night: 8000 },
    { day: "Tuesday", Morning: 2000, Afternoon: 4200, Evening: 9800, Night: 7500 },
    { day: "Wednesday", Morning: 2700, Afternoon: 5300, Evening: 11500, Night: 8900 },
    { day: "Thursday", Morning: 2100, Afternoon: 4900, Evening: 10800, Night: 7900 },
    { day: "Friday", Morning: 2900, Afternoon: 5700, Evening: 12500, Night: 9600 },
    { day: "Saturday", Morning: 3300, Afternoon: 6200, Evening: 14000, Night: 10200 },
    { day: "Sunday", Morning: 3100, Afternoon: 6000, Evening: 13500, Night: 9700 },
  ],
};

const heatmapSlice = createSlice({
  name: "heatmap",
  initialState,
  reducers: {
    updateHeatmapData: (state, action) => {
      state.heatmapData = action.payload; // Update the data dynamically if needed
    },
  },
});

export const { updateHeatmapData } = heatmapSlice.actions;
export default heatmapSlice.reducer;
