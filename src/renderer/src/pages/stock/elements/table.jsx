import { IconButton } from "@mui/material"
import { FaPencil } from "react-icons/fa6"

export default function StockTable() {
  const medicines = [
      { id:0, name: 'Med 1', stock: 12, category: 'Analgésiques', prix: 300,fournisseur: "ALI" },

  ]


  return (
      <div className="p-4 bg-normal-green rounded-b-[25px] shadow-lg  ">

          {/* Table Section */}
          <div className="max-h-[70vh] overflow-auto bg-dark-green text-dark-green-contrastText mt-4 p-4 rounded-[25px] flex justify-center">
              <table className="w-full text-center ">
                  <thead>
                      <tr className="text-normal-green border-b border-dark-green-contrastText">
                          <th className="p-2">ID</th>
                          <th className="p-2">Nom</th>
                          <th className="p-2">Stock</th>
                          <th className="p-2">Category</th>
                          <th className="p-2">Prix</th>
                          <th className="p-2">Fournisseur</th>
                          <th className="p-2">Edit</th>
                      </tr>
                  </thead>
                  <tbody>
                      {medicines.map((med, index) => (
                          <tr
                              key={index}
                              className="text-light-green border-b border-dark-green-contrastText"
                          >
                              <td className="p-2">{med.id}</td>
                              <td className="p-2">{med.name}</td>
                              <td className="p-2">{med.stock}</td>
                              <td className="p-2">{med.category} Dhs</td>
                              <td className="p-2">{med.prix}</td>
                              <td className="p-2">{med.fournisseur}</td>
                              {/* edit btn */}
                              <td className="p-2">
                                <IconButton size="small" color="normalGreen">
                                  <FaPencil />
                                </IconButton>
                              </td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>
      </div>
  )
}
