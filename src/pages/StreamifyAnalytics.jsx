import KeyMatrix from "../components/StreamifyAnalytics.components/KeyMatrix.jsx";
import UserGrowthChart from "../components/StreamifyAnalytics.components/UserGrowthChart.jsx";
import RevenueChart from "../components/StreamifyAnalytics.components/RevenueChart.jsx";
import TopSongsChart from "../components/StreamifyAnalytics.components/TopSongsChart.jsx";
import RecentStreamsTable from "../components/StreamifyAnalytics.components/RecentStreamsTable.jsx";
import UserArtistInsights from "../components/StreamifyAnalytics.components/UserArtistInsights.jsx";
import RevenueTrendChart from "../components/StreamifyAnalytics.components/RevenueTrendChart.jsx";
import StreamingHeatmap from "../components/StreamifyAnalytics.components/StreamingHeatmap.jsx";


export default function StreamifyAnalytics() {
  return (
    <main className="bg-gray-900 min-h-screen flex flex-col items-center justify-start text-white p-6">
      <h1 className="text-xl md:text-3xl font-bold mb-6">Streamify Analytics Dashboard</h1>

      <KeyMatrix />      
      <UserArtistInsights />


      <div className="w-full max-w-screen-2xl mt-6 flex flex-col gap-6">
        <StreamingHeatmap/>

        <UserGrowthChart />
      </div>

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-screen-2xl mt-6">
        <div className="w-full md:w-1/3 flex flex-col gap-4">
          <div className="bg-gray-800 p-4 rounded-xl shadow-md">
            <RevenueChart />
          </div>
          <div className="bg-gray-800 p-4 rounded-xl shadow-md">
            <RevenueTrendChart />
          </div>
        </div>

        <div className="w-full md:w-2/3 bg-gray-800 p-0 md:p-4 rounded-xl shadow-md">
          <TopSongsChart />
        </div>
      </div>

      <div className="w-full max-w-screen-2xl mt-6">
        <RecentStreamsTable />
      </div>
    </main>
  );
}
