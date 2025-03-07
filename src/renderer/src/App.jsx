import { Button } from '@mui/material'
import { Link, Outlet, useLocation } from 'react-router-dom'
import appLogo from './assets/gsm.png'
import { routesConfig } from './routes/routes'
import { useEffect } from 'react'
import { fetchStock } from './features/stockSlice'
import { useDispatch } from 'react-redux'
export default function App() {

  const dispatch = useDispatch()

  useEffect(()=> {
    // fetch stock
      dispatch(fetchStock())



  }, [dispatch])



  let pathname = useLocation().pathname.replace("/", "").toUpperCase()
  if (pathname == ""){
    pathname = "TABEALU DE BOARD"
  }
    return (
        <div className="flex h-screen bg-light-green gap-4 overflow-hidden">
            {/* side nav */}

            <SideNav />

            {/* main container */}
            <div className="h-screen flex-1  flex flex-col p-4 overflow-auto">
                {/* top nav */}
                <nav className="md:py-4 py-2 bg-normal-green rounded-[25px] text-center mb-4">
                    {pathname}
                </nav>

                {/* container */}
                <div className="flex-[1]">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

const SideNav = () => {
    const location = useLocation().pathname

    return (
        <section className="p-4 h-screen flex flex-col items-center text-center gap-12 flex-[0.15] lg:flex-[0.25] md:flex-[0.2] max-w-[300px] bg-normal-green rounded-[25px] rounded-tl-none rounded-bl-none">
            {/* sidenav top */}
            <div className="flex-[1]  flex flex-col justify-between w-full  ">
                <div className="flex flex-col items-center   ">
                    {/* heading */}
                    <img src={appLogo} alt="" className="w-[120px]" />
                    <h1 className="font-bold">GSM</h1>
                    {/* tabs */}
                    <div className="flex flex-col mt-4  w-full gap-1">
                        {/* loop the childrens of the main layout  */}
                        {routesConfig[1].children.map((route, k) => (
                            <Button
                                key={k}
                                LinkComponent={Link}
                                to={route.path}
                                color="darkGreen"
                                variant={location == route.path ? 'contained' : 'text'}
                                sx={{ minWidth: '100%' }}
                            >
                                {route.name}
                            </Button>
                        ))}
                    </div>
                </div>

                <Button size="medium" variant="contained" color="error">
                    DECONNEXION
                </Button>
            </div>

            {/* sidenav bottom */}
            <small className="opacity-70">
                V 1.0 ALPHA | OFPPT
                <br />
                DEV PIE
            </small>
        </section>
    )
}
