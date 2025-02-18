import React from 'react'

export default function Table() {
    const medicines = [
        { name: 'Med 1', stock: 12, category: 'Analgésiques' },
        { name: 'Med 2', stock: 32, category: 'Antibiotiques' },
        { name: 'Med 3', stock: 34, category: 'Hypotenseurs' },
        { name: 'Med 4', stock: 13, category: 'Analgésiques' },
        { name: 'Med 5', stock: 55, category: 'Antibiotiques' },
        { name: 'Med 6', stock: 75, category: 'Hypotenseurs' },
        { name: 'Med 7', stock: 21, category: 'Analgésiques' }
    ]

    const totalMedicines = 102

    return (
        <div className="p-4 bg-normal-green rounded-[25px] shadow-lg">
            {/* Header Section */}
            <div className="text-normal-green-contrastText text-center p-4 rounded-[25px] ">
                <h1 className="text-3xl font-bold">{totalMedicines}</h1>
                <h1 className="text-3xl font-bold">TOTAL MEDICAMENTS</h1>
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
                        {medicines.map((med, index) => (
                            <tr
                                key={index}
                                className="text-light-green border-b border-dark-green-contrastText"
                            >
                                <td className="p-2">{med.name}</td>
                                <td className="p-2">{med.stock}</td>
                                <td className="p-2">{med.category}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
