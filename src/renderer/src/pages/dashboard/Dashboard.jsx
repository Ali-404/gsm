import Table from './elements/table'
import NotificationAlert from './elements/notificationAlert'
import GrapheCategory from './elements/grapheCategory'

export default function Dashboard() {
    return (
        <div className="flex flex-col gap-2">
            <NotificationAlert />
            <Table />
            <GrapheCategory />
        </div>
    )
}
