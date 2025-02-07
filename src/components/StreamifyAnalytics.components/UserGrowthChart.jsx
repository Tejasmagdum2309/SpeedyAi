import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer,Legend } from "recharts";
import { useSelector } from "react-redux";

export default function UserGrowthChart() {

  const userGrowthData = useSelector((state) => state.userGrowth.userGrowthData);

  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-md w-full">
      <h3 className="text-xl font-semibold mb-4 text-center">📈 User Growth (12 Months)</h3>
      <ResponsiveContainer width="100%" height={370}>
                  <LineChart data={userGrowthData}>
                    <XAxis dataKey="month" stroke="#ccc" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="1 1" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="totalUsers" stroke="#8884d8" strokeWidth={3} />
                    <Line type="monotone" dataKey="activeUsers" stroke="#82ca9d" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
    </div>
  );
}
