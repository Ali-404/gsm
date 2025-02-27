import React from 'react'
import Notification from './elements/Notification'

export default function Notifications() {
    const notifData = [
        {
            time: '08:15',
            date: '2023-10-25',
            title: 'Low Stock Alert: Paracetamol',
            message: 'Paracetamol is running low, only 5 units remaining.'
        },
        {
            time: '09:45',
            date: '2023-10-25',
            title: 'Low Stock Alert: Ibuprofen',
            message: 'Ibuprofen is running low, only 3 units remaining.'
        },
        {
            time: '11:20',
            date: '2023-10-25',
            title: 'Refill Reminder: Amoxicillin',
            message: 'Time to refill Amoxicillin, only 1 unit left.'
        },
        {
            time: '14:00',
            date: '2023-10-25',
            title: 'Expiry Alert: Loratadine',
            message: 'Loratadine will expire in 7 days, please check stock.'
        },
        {
            time: '16:30',
            date: '2023-10-25',
            title: 'Low Stock Alert: Omeprazole',
            message: 'Omeprazole is running low, only 4 units remaining.'
        },
        {
            time: '18:10',
            date: '2023-10-25',
            title: 'Refill Reminder: Cetirizine',
            message: 'Time to refill Cetirizine, only 2 units left.'
        },
        {
            time: '20:05',
            date: '2023-10-25',
            title: 'Low Stock Alert: Aspirin',
            message: 'Aspirin is running low, only 6 units remaining.'
        }
    ]
    return (
        <div className="bg-normal-green rounded-[25px] py-1 px-1">
            <div className="bg-dark-green rounded-[25px] flex gap-3 flex-col p-5 m-5 max-h-[80vh] overflow-auto">
                {notifData.map((notif, k) => (
                    <Notification
                        key={k}
                        time={notif.time}
                        date={notif.date}
                        title={notif.title}
                        message={notif.message}
                    />
                ))}
            </div>
        </div>
    )
}
