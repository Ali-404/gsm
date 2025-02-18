import React from 'react'

export default function NotificationAlert() {
    const Content = 'You have 5 new notifications'
    return (
        <div className="gap-3 flex flex-row text-light-green bg-normal-green p-2 rounded-[25px] shadow-lg">
            <div>🔔</div>
            <h3 className="text-dark-green font-bold text-xl">{Content}</h3>
        </div>
    )
}
