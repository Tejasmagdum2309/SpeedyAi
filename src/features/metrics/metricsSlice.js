import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, title: "Total Users", value: "10,500", icon: "FaUsers", color: "text-blue-400" },
  { id: 2, title: "Active Users", value: "7,200", icon: "FaUsers", color: "text-green-400" },
  { id: 3, title: "Total Streams", value: "250K", icon: "FaPlay", color: "text-purple-400" },
  { id: 4, title: "Revenue", value: "$125K", icon: "FaDollarSign", color: "text-yellow-400" },
  { id: 5, title: "Top Artist", value: "The Weeknd", icon: "FaMusic", color: "text-red-400" }
];

const metricsSlice = createSlice({
  name: 'metrics',
  initialState,
  reducers: {
    updateMetrics: (state, action) => {
      return action.payload;
    }
  }
});

export const { updateMetrics } = metricsSlice.actions;
export default metricsSlice.reducer;
