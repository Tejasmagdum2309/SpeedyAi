import { createSlice } from "@reduxjs/toolkit";
import { faker } from "@faker-js/faker";

// Generate dummy data
const generateDummyData = (count = 100) => {
  const songs = ["Blinding Lights", "Levitating", "Save Your Tears", "Peaches", "Stay"];
  const artists = ["The Weeknd", "Dua Lipa", "The Weeknd", "Justin Bieber", "The Kid LAROI"];

  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    song: faker.helpers.arrayElement(songs),
    artist: faker.helpers.arrayElement(artists),
    date: faker.date.recent({ days: 30 }).toISOString().split("T")[0], // Last 30 days
    count: faker.number.int({ min: 1000, max: 10000 }), // Random stream count
    userId: faker.string.alphanumeric(6).toUpperCase(), // Random User ID
  }));
};

// Initial state
const initialState = {
  streams: generateDummyData(100),
  searchQuery: "",
  artistFilter: "",
  sortBy: "",
  currentPage: 1,
  itemsPerPage: 10,
};

const recentStreamsSlice = createSlice({
  name: "recentStreams",
  initialState,
  reducers: {
    updateRecentStreams: (state) => {
      state.streams = generateDummyData(100);
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setArtistFilter: (state, action) => {
      state.artistFilter = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { updateRecentStreams, setSearchQuery, setArtistFilter, setSortBy, setCurrentPage } =
  recentStreamsSlice.actions;

export default recentStreamsSlice.reducer;
