import { useSelector } from "react-redux";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer,Legend } from "recharts";

const COLORS = ["#8884d8", "#82ca9d"];

export default function RevenueChart() {
  const revenueData = useSelector((state) => state.revenue.revenueData);

  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-md w-full">
          <h4 className="text-lg font-semibold mb-2 text-center">💰 Revenue Distribution</h4>
          <ResponsiveContainer width="100%" height={200}>
        <PieChart>
                     <Tooltip />
                     <Legend />
                     <Pie
                       data={revenueData}
                       dataKey="value"
                       nameKey="name"
                       cx="50%"
                       cy="50%"
                       outerRadius={80}
                       fill="#8884d8"
                     >
                       {revenueData.map((entry, index) => (
                         <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                       ))}
                     </Pie>
                   </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
