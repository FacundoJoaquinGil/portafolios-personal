import { NavBar } from "./components/NavBar"
import './app.css'
import { Home } from "./components/Home"
import { SobreMi } from "./components/SobreMi"


export const App = () => {
  return (
    <>
    <NavBar/>
    <Home/>
    <SobreMi/>
    </>
  )
}
