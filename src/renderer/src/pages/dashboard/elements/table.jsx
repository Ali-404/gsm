import { useSelector } from "react-redux"
import LoadingPage from "../../../sharedComponents/LoadingPage"
import { getCategoryName } from "../../../features/stockSlice";

export default function Table() {

    const {loading, error, medics,categories}  = useSelector(state => state.stock)

    if (loading)
      return <LoadingPage />
    if (error)
      return <div className="text-red-500 text-center">Error: {error}</div>


    return (
        <div className="p-4 bg-normal-green rounded-[25px] shadow-lg  min-h-[80vh]">
            {/* Header Section */}
            <div className="text-normal-green-contrastText text-center p-4 rounded-[25px] ">
                <h1 className="text-3xl font-bold">TOTAL MEDICAMENTS</h1>
                <h1 className="text-3xl font-bold">{medics?.length ?? 0}</h1>
            </div>

            {/* Table Section */}
            <div className="bg-dark-green text-dark-green-contrastText mt-4 p-4 rounded-[25px] flex justify-center">
                <table className="w-full text-center">
                    <thead>
                        <tr className="text-normal-green border-b border-dark-green-contrastText">
                            <th className="p-2">Nom</th>
                            <th className="p-2">Stock</th>
                            <th className="p-2">Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {medics.length > 0 && medics.slice(0,10).map((med, index) => (
                            <tr
                                key={index}
                                className="text-light-green border-b border-dark-green-contrastText"
                            >
                                <td className="p-2">{med.name}</td>
                                <td className="p-2">{med.stock}</td>
                                <td className="p-2">{getCategoryName(categories, med.categorie_id)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
