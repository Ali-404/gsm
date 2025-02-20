import React from 'react'

export default function Notification({ time, date, title, message }) {
    const formattedDate = formatDate(date)

    return (
        <div className="flex items-start gap-3 bg-light-green p-3 rounded-xl shadow ">
            <div className="flex flex-col items-center gap-1">
                <span className="bg-dark-green text-light-green text-xs font-bold px-2 py-1 rounded-md w-full flex justify-center items-center">
                    {formattedDate}
                </span>
                <span className="bg-dark-green text-light-green text-xs font-bold px-2 py-1 rounded-md w-full flex justify-center items-center">
                    {time}
                </span>
            </div>
            <div className="flex flex-col justify-center gap-1">
                <p className="text-sm font-extrabold text-dark-green">{title}</p>
                <p className="text-xs text-dark-green">{message}</p>
            </div>
        </div>
    )
}

// Helper function to format the date
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    const formattedDate = new Date(date).toLocaleDateString('en-US', options)
    return formattedDate
}
