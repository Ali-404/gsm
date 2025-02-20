import { PieChart } from '@mui/x-charts'

export default function GrapheCategory() {
    const data = [
        { name: 'Analgésiques', value: 19.01, color: '#8FDFA5' },
        { name: 'Antibiotiques', value: 35.95, color: '#253239' },
        { name: 'Hypotenseurs', value: 45.04, color: '#E6FDEC' }
    ]
    return (
        <div className="flex items-center bg-normal-green p-4 rounded-[25px] shadow-lg gap-4">
            <div className="flex-1 flex justify-center items-center flex-col">
                {/* Bigger Title */}
                <h1 className="text-3xl font-bold mb-5">Consomation par Categories</h1>

                {data.map((item) => (
                    <table key={item.name} className="flex w-full align-middle justify-between">
                        <tr className="w-full  border border-dark-green rounded-[25px]  flex items-center justify-between p-1">
                            {/* Color Square */}
                            <div
                                style={{ backgroundColor: item.color }}
                                className="w-6 h-6 mr-4 rounded-[25px] border-2 border-dark-green"
                            ></div>
                            <td className="px-4 py-2 font-bold text-left">{item.name}</td>
                            <td className="px-4 py-2 text-left">{item.value}%</td>
                        </tr>
                    </table>
                ))}
            </div>

            {/* Right Side - Chart */}
            <div className="flex-1 flex justify-center">
            <PieChart
                series={[
                  {
                    data: data,

                  },

                ]}
                width={400}
                height={200}

              />
            </div>
        </div>
    )
}
