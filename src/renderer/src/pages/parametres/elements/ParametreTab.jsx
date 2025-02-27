import { Icon, Switch } from "@mui/material"
import { FaBell } from "react-icons/fa"

const tabClass = " flex items-center "

// eslint-disable-next-line react/prop-types
export default function ParametreTab({leadingIcon = null,title,rightElement}) {
  return (
    <div className={`bg-light-green text-dark-green rounded-xl p-2 ${tabClass}  justify-between`}>

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
