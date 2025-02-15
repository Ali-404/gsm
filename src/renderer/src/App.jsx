import { Button } from "@mui/material";
import { Outlet } from "react-router-dom";
import appLogo from './assets/gsm.png'
export default function App() {
  return (
    <div className="flex h-screen bg-light-green gap-4">

        {/* side nav */}

        <SideNav />

        {/* main container */}
        <div className="h-screen flex-1  flex flex-col p-4">


            {/* top nav */}
            <nav className="md:py-4 py-2 bg-normal-green rounded-[25px] text-center mb-4">TITLE</nav>

            {/* container */}
            <div className="flex-[1]">
              <Outlet />
            </div>
        </div>

    </div>
  )
}


const SideNav = () => {
  return (
    <section className="p-4 h-full flex flex-col items-center text-center gap-12 flex-[0.15] lg:flex-[0.25] md:flex-[0.2] bg-normal-green rounded-[25px] rounded-tl-none rounded-bl-none">

      {/* sidenav top */}
      <div className="flex-[1]  flex flex-col justify-between w-full">
        <div className="flex flex-col items-center ">
          {/* heading */}
          <img src={appLogo} alt="" className="w-[120px]" />
          <h1 className="font-bold">GSM</h1>
          {/* tabs */}
          <div className="flex flex-col mt-4 ">
            <Button color="darkGreen" variant="contained" sx={{minWidth:"100%"}}  >Dashboard</Button>
          </div>

        </div>


        <Button size="medium"   variant="contained" color="error">DECONNEXION</Button>
      </div>

      {/* sidenav bottom */}
      <small className="opacity-70">
        V 1.0 ALPHA | OFPPT<br />
        DEV PIE
      </small>
    </section>
  )
}
