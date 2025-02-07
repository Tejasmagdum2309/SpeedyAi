import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useSelector } from "react-redux";


export default function RevenueTrendChart() {
  const revenueTrends = useSelector((state) => state.revenueTrends.revenueTrends);

  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-md w-full">
      <h4 className="text-md font-semibold mb-2 text-center">Monthly Revenue Trend</h4>
      <ResponsiveContainer width="100%" height={150}>
        <BarChart data={revenueTrends}>
          <XAxis dataKey="month" tick={{ fill: "#ccc" }} />
          <YAxis hide />
          <Tooltip cursor={{ fill: "rgba(255, 255, 255, 0.2)" }}  />
          <Bar dataKey="revenue" fill="#4CAF50" radius={[5, 5, 0, 0]} barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
