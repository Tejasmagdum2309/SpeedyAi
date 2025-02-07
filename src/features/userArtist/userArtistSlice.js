import { createSlice } from "@reduxjs/toolkit";
import { faker } from "@faker-js/faker";

const generateMockData = () => {
  try {
    return {
      topArtists: Array.from({ length: 10 }, () => ({
        name: faker.person.fullName(),
        streams: faker.number.int({ min: 50000, max: 150000 })
      })),
      topUsers: Array.from({ length: 10 }, () => ({
        username: faker.internet.userName(),
        streams: faker.number.int({ min: 300, max: 800 })
      }))
    };
  } catch (error) {
    console.error("Error generating mock data:", error);
    return { topArtists: [], topUsers: [] };
  }
};

const userArtistSlice = createSlice({
  name: "userArtist",
  initialState: generateMockData(),
  reducers: {
    updateUserArtistInsights: (state) => {
      const newData = generateMockData();
      state.topArtists = newData.topArtists;
      state.topUsers = newData.topUsers;
    }
  }
});

export const { updateUserArtistInsights } = userArtistSlice.actions;
export default userArtistSlice.reducer;
