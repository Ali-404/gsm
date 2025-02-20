import Table from './elements/table'
import NotificationAlert from './elements/notificationAlert'
import GrapheCategory from './elements/grapheCategory'
import ConsomationGraphe from './elements/ConsomationGraphe'

export default function Dashboard() {
    return (
        <div className="flex flex-col gap-2 h-full flex-wrap overflow-auto">
            <NotificationAlert />
            <div className='flex md:items-center md:flex-row flex-col  gap-4 '>
              <Table />
              <div className='flex gap-2 flex-col flex-[1]'>
                <GrapheCategory />
                <ConsomationGraphe />

              </div>
            </div>
        </div>
    )
}
