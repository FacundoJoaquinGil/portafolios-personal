import './app.css';
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { SobreMi } from "./components/SobreMi";
import { HabilidadesTecnicas } from "./components/HabilidadesTecnicas";
import { Form } from "./components/Form";
import { Cards } from "./components/Cards";

export const App = () => {
  return (
    <>
      <NavBar />
      <div id="home">
        <Home />
      </div>
      <div id="sobre-mi">
        <SobreMi />
      </div>
      <div id="proyectos">
        <Cards />
      </div>
      <div id="skills">
        <HabilidadesTecnicas />
      </div>
      <div id="contact">
        <Form />
      </div>
    </>
  );
};
