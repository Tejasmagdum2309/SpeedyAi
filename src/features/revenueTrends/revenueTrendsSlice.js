import { createSlice } from "@reduxjs/toolkit";

// Initial revenue trends data
const initialState = {
  revenueTrends: [
    { month: "Oct", revenue: 12000 },
    { month: "Nov", revenue: 13500 },
    { month: "Dec", revenue: 15000 },
    { month: "Jan", revenue: 18000 },
    { month: "Feb", revenue: 20000 }
  ]
};

const revenueTrendsSlice = createSlice({
  name: "revenueTrends",
  initialState,
  reducers: {
    updateRevenueTrends: (state, action) => {
      state.revenueTrends = action.payload;
    }
  }
});

export const { updateRevenueTrends } = revenueTrendsSlice.actions;
export default revenueTrendsSlice.reducer;
