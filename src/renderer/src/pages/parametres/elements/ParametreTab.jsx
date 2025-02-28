import { Icon, Switch } from "@mui/material"
import { FaBell } from "react-icons/fa"
import { FcDataBackup } from "react-icons/fc"

const tabClass = "bg-light-green text-dark-green rounded-xl p-2  flex items-center "

// eslint-disable-next-line react/prop-types
export default function ParametreTab({leadingIcon = null,title,rightElement,onClick = null}) {



  return (
    <div className={`${tabClass}  justify-between `}>

      <div className="flex items-center gap-2">
      {leadingIcon && <Icon>{leadingIcon}</Icon>}
        <h1>{title}</h1>
      </div>
      {rightElement}

    </div>
  )
}


export  function ParametreRecuperationNotifs() {
  return (
    <div>
      <ParametreTab leadingIcon={<FaBell />} title={"Recuperer les notifications"} rightElement={<Switch color="success"  />} />
    </div>
  )
}


export function ParametreBackupTime(){
  return (
    <div>
      <ParametreTab leadingIcon={<FcDataBackup />} title={"Sauvgardage sur le cloud"} rightElement={<Switch color="success"  />} />
    </div>
  )
}
