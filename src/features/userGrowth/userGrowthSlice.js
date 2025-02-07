import { createSlice } from "@reduxjs/toolkit";

// Initial mock data
const initialState = {
  userGrowthData: [
    { month: "Feb", totalUsers: 500, activeUsers: 300 },
    { month: "Mar", totalUsers: 800, activeUsers: 600 },
    { month: "Apr", totalUsers: 1100, activeUsers: 700 },
    { month: "May", totalUsers: 1500, activeUsers: 1000 },
    { month: "Jun", totalUsers: 2000, activeUsers: 1300 },
    { month: "Jul", totalUsers: 2500, activeUsers: 1800 },
    { month: "Aug", totalUsers: 3200, activeUsers: 2000 },
    { month: "Sep", totalUsers: 4000, activeUsers: 2600 },
    { month: "Oct", totalUsers: 5000, activeUsers: 3100 },
    { month: "Nov", totalUsers: 6000, activeUsers: 4000 },
    { month: "Dec", totalUsers: 7000, activeUsers: 4800 },
    { month: "Jan", totalUsers: 8200, activeUsers: 6500 }
  ]
};

const userGrowthSlice = createSlice({
  name: "userGrowth",
  initialState,
  reducers: {
    updateUserGrowthData: (state, action) => {
      state.userGrowthData = action.payload; // Update with new data
    }
  }
});

export const { updateUserGrowthData } = userGrowthSlice.actions;
export default userGrowthSlice.reducer;
