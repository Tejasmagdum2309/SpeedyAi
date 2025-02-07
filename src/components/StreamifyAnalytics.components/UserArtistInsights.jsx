import { useEffect, useState } from "react";
import { FaChartBar } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { updateUserArtistInsights } from "../../features/userArtist/userArtistSlice.js";

export default function UserArtistInsights() {
  const dispatch = useDispatch();
  const insights = useSelector((state) => state.userArtist);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("Redux state:", insights);
    
    if (insights && insights.topArtists && insights.topUsers) {
      setIsLoading(false);
    } else {
      dispatch(updateUserArtistInsights());
    }

    const interval = setInterval(() => {
      dispatch(updateUserArtistInsights());
    }, 30000); // Auto-update every 30 seconds

    return () => clearInterval(interval);
  }, [dispatch, insights]);

  if (isLoading) {
    return <p className="text-white">Loading...</p>;
  }

  // Check if insights object has the expected structure
  if (!insights || !insights.topArtists || !insights.topUsers) {
    return <p className="text-white">Error: Invalid data structure</p>;
  }

  return (
    <div className="bg-gray-800 p-6 px-1 md:px-6 rounded-xl shadow-md w-full max-w-screen-2xl mt-6">
      <h3 className="text-xl font-semibold mb-4 text-center flex items-center justify-center gap-2">
        <FaChartBar className="text-2xl text-white" />
        User & Artist Insights
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {/* Top Artists Leaderboard */}
        <div className="bg-gray-900 p-4 rounded-lg ">
          <h4 className="text-lg font-semibold mb-3 text-center flex flex-col md:flex-row justify-center items-center gap-1">
          🎤 Top 10 Artists <span className="hidden md:inline">(Last 30 Days)</span>
  <span className="md:hidden">(Last 30 Days)</span>
</h4>
          <div className="overflow-x-auto whitespace-nowrap ">
          <ul >
            {insights.topArtists.map((artist, index) => (
              <li key={artist.name} className="flex text-nowrap justify-between py-2 border-b border-gray-700 hover:-translate-1 transform-all duration-300">
                <span>{index + 1}. {artist.name}</span>
                <span className="font-bold">{artist.streams.toLocaleString()} streams</span>
              </li>
            ))}
          </ul></div>
        </div>

        {/* Top Users Leaderboard */}
        <div className="bg-gray-900 p-4 rounded-lg">
        <h4 className="text-lg font-semibold mb-3 text-center flex flex-col md:flex-row justify-center items-center gap-1">
  🎧 Most Engaged Users <span className="hidden md:inline">(Last 30 Days)</span>
  <span className="md:hidden">(Last 30 Days)</span>
</h4>
          <div className="overflow-x-auto whitespace-nowrap ">
          <ul>
            {insights.topUsers.map((user, index) => (
              <li key={user.username} className="flex text-nowrap justify-between py-2 border-b border-gray-700 hover:-translate-1 transform-all duration-300">
                <span>{index + 1}. {user.username}</span>
                <span className="font-bold">{user.streams} streams</span>
              </li>
            ))}
          </ul></div>
        </div>
      </div>
    </div>
  );
}