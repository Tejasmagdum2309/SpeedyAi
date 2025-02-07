import { configureStore } from '@reduxjs/toolkit';
import metricsReducer from './features/metrics/metricsSlice';
import userArtistReducer from './features/userArtist/userArtistSlice';
import userGrowthReducer from './features/userGrowth/userGrowthSlice';
import revenueReducer from './features/revenue/revenueSlice';
import revenueTrendsReducer from "./features/revenueTrends/revenueTrendsSlice";

import topSongsReducer from './features/topSongs/topSongsSlice';
import recentStreamsReducer from './features/recentStreams/recentStreamsSlice';
import heatmapReducer from './features/heatmap/heatmapSlice';

export const store = configureStore({
  reducer: {
    metrics: metricsReducer,
    userArtist: userArtistReducer,
    userGrowth: userGrowthReducer,
    revenue: revenueReducer,
    revenueTrends: revenueTrendsReducer,
    topSongs: topSongsReducer,
    recentStreams: recentStreamsReducer,
    heatmap: heatmapReducer,

  }
});
