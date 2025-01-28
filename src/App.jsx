import './app.css';
import { useEffect } from 'react';
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { SobreMi } from "./components/SobreMi";
import { HabilidadesTecnicas } from "./components/HabilidadesTecnicas";
import { Form } from "./components/Form";
import { Cards } from "./components/Cards";

export const App = () => {
  
  useEffect(() => {
    const validRoutes = ['/', '/sobre-mi', '/proyectos', '/skills', '/contact'];
    const currentPath = window.location.pathname;

    // Si la ruta actual no es válida, redirige al Home y actualiza la URL
    if (!validRoutes.includes(currentPath)) {
      window.location.replace('/');  
    }
  }, []);

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
