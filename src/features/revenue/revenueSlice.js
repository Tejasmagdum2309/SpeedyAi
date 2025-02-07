import { createSlice } from "@reduxjs/toolkit";

// Initial mock data
const initialState = {
  revenueData: [
    { name: "Subscriptions", value: 70000 },
    { name: "Ads", value: 55000 }
  ]
};

const revenueSlice = createSlice({
  name: "revenue",
  initialState,
  reducers: {
    updateRevenueData: (state, action) => {
      state.revenueData = action.payload;
    }
  }
});

export const { updateRevenueData } = revenueSlice.actions;
export default revenueSlice.reducer;
