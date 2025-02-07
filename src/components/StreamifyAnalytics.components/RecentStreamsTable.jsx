import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaStream } from "react-icons/fa";
import {
  updateRecentStreams,
  setSearchQuery,
  setArtistFilter,
  setSortBy,
  setCurrentPage,
} from "../../features/recentStreams/recentStreamsSlice.js";

export default function RecentStreamsTable() {
  const dispatch = useDispatch();
  const {
    streams,
    searchQuery,
    artistFilter,
    sortBy,
    currentPage,
    itemsPerPage,
  } = useSelector((state) => state.recentStreams);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateRecentStreams());
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, [dispatch]);

  // Filter and sort data
  const filteredData = streams.filter((stream) =>
    stream.song.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (artistFilter === "" || stream.artist === artistFilter)
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (sortBy === "date") return new Date(b.date) - new Date(a.date);
    if (sortBy === "streams") return b.count - a.count;
    if (sortBy === "song") return a.song.localeCompare(b.song);
    return 0;
  });

  // Pagination
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const displayedData = sortedData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-md w-full max-w-screen-2xl">
      <h3 className="text-xl font-semibold mb-4 text-center">🎧 Recent Streams</h3>

      {/* Search & Filter Controls */}
      <div className="flex justify-between flex-wrap gap-4 mb-4">
        <input
          type="text"
          placeholder="Search Song..."
          className="p-2 w-full md:w-1/3 rounded bg-gray-700 text-white outline-none"
          value={searchQuery}
          onChange={(e) => { dispatch(setSearchQuery(e.target.value)); disabled(setCurrentPage(1));}}
        />
        <div className="flex justify-end w-full md:w-1/2 gap-2">
          <select
            className="p-2 w-full md:w-1/4 rounded bg-gray-700 text-white outline-none"
            value={artistFilter}
            onChange={(e) => { dispatch(setArtistFilter(e.target.value)); dispatch(setCurrentPage(1));   }}
          >
            <option value="">All Artists</option>
            {[...new Set(streams.map((s) => s.artist))].map((artist) => (
              <option key={artist} value={artist}>
                {artist}
              </option>
            ))}
          </select>
          <select
            className="p-2 w-full md:w-1/4 rounded bg-gray-700 text-white outline-none"
            value={sortBy}
            onChange={(e) => { dispatch(setSortBy(e.target.value)); dispatch(setCurrentPage(1));  }}
          >
            <option value="">Sort By</option>
            <option value="date">Date Streamed</option>
            <option value="streams">Stream Count</option>
            <option value="song">Song Name</option>
          </select>
        </div>
      </div>

      {/* Data Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-gray-700 text-gray-300">
              <th className="p-3 text-nowrap">Song Name</th>
              <th className="p-3 text-nowrap">Artist</th>
              <th className="p-3 text-nowrap">Date Streamed</th>
              <th className="p-3 text-nowrap">Stream Count</th>
              <th className="p-3 text-nowrap">User ID</th>
            </tr>
          </thead>
          <tbody>
            {displayedData.length > 0 ? (
              displayedData.map((stream, index) => (
                <tr key={stream.id} className={`${index % 2 === 0 ? "bg-gray-900" : "bg-gray-800"} hover:-translate-1 hover:shadow-4xl transition-all duration-300`}>
                  <td className="p-3 text-nowrap">{stream.song}</td>
                  <td className="p-3 text-nowrap">{stream.artist}</td>
                  <td className="p-3 text-nowrap">{stream.date}</td>
                  <td className="p-3 text-nowrap">{stream.count.toLocaleString()}</td>
                  <td className="p-3 text-nowrap">{stream.userId}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-3 text-center text-gray-400">
                  No matching records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        <button
          className="px-4 py-2 mx-1 rounded bg-gray-700 text-white disabled:opacity-50"
          onClick={() => dispatch(setCurrentPage(Math.max(currentPage - 1, 1)))}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span className="px-4 py-2">
          {currentPage} / {totalPages}
        </span>
        <button
          className="px-4 py-2 mx-1 rounded bg-gray-700 text-white disabled:opacity-50"
          onClick={() => dispatch(setCurrentPage(Math.min(currentPage + 1, totalPages)))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
