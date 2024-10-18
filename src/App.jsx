import { NavBar } from "./components/NavBar"
import './app.css'
import { Home } from "./components/Home"
import { SobreMi } from "./components/SobreMi"
import { HabilidadesTecnicas } from "./components/HabilidadesTecnicas"
import { Form } from "./components/Form"
import { Cards } from "./components/Cards"


export const App = () => {
  return (
    <>
    <NavBar/>
    <Home/>
    <SobreMi/>
    <Cards/>
    <HabilidadesTecnicas/>
    <Form/>
    </>
  )
}
