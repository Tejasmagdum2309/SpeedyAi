import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from "recharts";
import { FaMusic } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function TopSongsChart() {
  const topSongsData = useSelector((state) => state.topSongs.topSongs);

  return (
    <div className="bg-gray-800 p-4 md:p-6 rounded-xl shadow-md w-full">
      <h3 className="text-lg md:text-xl font-semibold mb-4 text-center flex items-center justify-center gap-3">
        <FaMusic className="text-lg md:text-2xl text-white" />
        Top 5 Streamed Songs (Last 30 Days)
      </h3>

      <ResponsiveContainer 
        className="mx-auto w-full sm:w-11/12 md:w-10/12"
        width="100%"
        height={window.innerWidth < 640 ? 300 : 400} // Adjust height for small screens
      >
        <BarChart data={topSongsData} barGap={8} barCategoryGap="15%">
        {window.innerWidth >= 640 && <CartesianGrid strokeDasharray="2 2" strokeOpacity={0.3} />}
          <XAxis 
            dataKey="song" 
            tick={{ fill: "white", fontSize: window.innerWidth < 640 ? 10 : 14 }} 
            angle={window.innerWidth < 640 ? -30 : 0} 
            textAnchor="end"
          />
          <YAxis  />
          <Tooltip cursor={{ fill: "rgba(255, 255, 255, 0.1)" }} />
          <Legend wrapperStyle={{ color: "white" }} />

          <Bar 
            dataKey="streams" 
            fill="#8884d8" 
            barSize={window.innerWidth < 640 ? 25 : 40} 
            radius={[8, 8, 0, 0]} 
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
