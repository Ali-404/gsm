import { LineChart } from "@mui/x-charts";

export default function ConsomationGraphe() {
  return (
    <div className="flex items-center flex-wrap bg-normal-green p-4 rounded-[25px] shadow-lg gap-4">
         <h1 className="text-3xl font-bold mb-5">Consomation des Medicaments 2025/2026</h1>
        <LineChart
      xAxis={[{ data: [1, 2, 3,4, 5,6,7, 8,9, 10,11, 12] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
        {
          data: [10, 5.5, 2, 8.5, 1.5, 5],
        },
        {
          data: [20, 50.5, 2, 8.5, 1.5, 5,10],
        },

      ]}
      height={200}
      margin={{ top: 10, bottom: 20 }}
    />

    </div>
  )
}
