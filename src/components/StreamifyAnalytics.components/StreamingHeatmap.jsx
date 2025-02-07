import React from "react";
import { useSelector } from "react-redux";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from "recharts";


// Define color scale function (🔵 Blue = Low | 🔥 Red = High)
const getColor = (value) => {
    if (value < 4000) return "#A8DADC"; // Soft Aqua
    if (value < 8000) return "#F4A261"; // Warm Apricot
    return "#E76F51"; // Gentle Coral
  };

  
export default function StreamingHeatmap() {
  const heatmapData = useSelector((state) => state.heatmap.heatmapData);

  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-md w-full">
      <h3 className="text-xl font-semibold mb-4 text-center text-white">
        🔥 Peak Streaming Heatmap (Day & Time)
      </h3>
      

      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={heatmapData} layout="vertical">
          <XAxis type="number" hide />
          <YAxis dataKey="day" type="category" tick={{ fill: "white" }} />
          <Tooltip cursor={{ fill: "rgba(255, 255, 255, 0.2)" }} 
            content={({ payload }) => {
              if (!payload || payload.length === 0) return null;
              const data = payload[0].payload;
              return (
                <div className="bg-gray-800 text-white p-2 rounded shadow-lg">
                  <strong>{data.day}</strong>
                  <br />
                  🌅 Morning: {data.Morning.toLocaleString()} streams
                  <br />
                  ☀️ Afternoon: {data.Afternoon.toLocaleString()} streams
                  <br />
                  🌆 Evening: {data.Evening.toLocaleString()} streams
                  <br />
                  🌙 Night: {data.Night.toLocaleString()} streams
                </div>
              );
            }}
          />

          {/* Bars for Each Time Period */}
          {["Morning", "Afternoon", "Evening", "Night"].map((time) => (
            <Bar key={time} dataKey={time} stackId="a">
              {heatmapData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getColor(entry[time])} />
              ))}
            </Bar>
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
