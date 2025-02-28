import React from 'react'
import FilterIcon from '../../../assets/Filter.png'
import Search from '../../../assets/Search.png'
import Plus from '../../../assets/Plus.png'

export default function Toolbar() {
    const Filter = <img src={FilterIcon} alt="Filter" className="h-6 w-6" />
    const SearchIcon = <img src={Search} alt="Search" className="" />
    const PlusIcon = <img src={Plus} alt="Plus" className="h-6 w-6" />

    return (
        <div className="flex w-full items- justify-between p-4 bg-normal-green rounded-t-[25px] shadow-lg">
            {/* Filter Button */}
            <button className="bg-dark-green rounded-2xl p-2 mr-2 transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer">
                {Filter}
            </button>

            {/* Search Bar Container */}
            <div className="w-full flex items-center bg-dark-green rounded-2xl h-10 p-1 gap-2">
                <input
                    type="text"
                    placeholder="Rechercher . . ."
                    className="bg-normal-green rounded-2xl p-2 w-full h-8 focus:outline-none"
                />
                <button className="bg-normal-green rounded-xl p-2 h-8 w-8 transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer">
                    {SearchIcon}
                </button>
            </div>

            {/* Plus Button */}
            <button className="bg-dark-green rounded-2xl p-2 ml-2 transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer">
                {PlusIcon}
            </button>
        </div>
    )
}
