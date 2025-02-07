import { useSelector } from "react-redux";
import { FaUsers, FaPlay, FaDollarSign, FaMusic } from "react-icons/fa";

const iconMap = {
  FaUsers: FaUsers,
  FaPlay: FaPlay,
  FaDollarSign: FaDollarSign,
  FaMusic: FaMusic,
};

export default function KeyMetrics() {
  const metrics = useSelector((state) => state.metrics);

  return (
    <div className="flex flex-wrap justify-center gap-6 w-full max-w-screen-2xl">
      {metrics.map((metric) => {
        const IconComponent = iconMap[metric.icon];

        return (
          <div
            key={metric.id}
            className="bg-gray-800 px-12 py-6 rounded-xl shadow-md flex-1 flex justify-center items-center gap-4 text-nowrap hover:-translate-1 transition-all duration-300"
          >
            <div className={`text-3xl ${metric.color}`}>
              {<IconComponent className="text-4xl" />}
            </div>
            <div>
              <h3 className="text-lg font-semibold">{metric.title}</h3>
              <p className="text-xl font-bold">{metric.value}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
