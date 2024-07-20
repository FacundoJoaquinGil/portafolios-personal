import clima from "../assets/clima.jpg";
import consultorio from "../assets/consultorio.jpg";
import biblioteca from "../assets/biblioteca.jpg";
import tienda from "../assets/tienda-ropa.jpg";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import sql from "../assets/sql.png";
import code from "../assets/code.png";
import json from "../assets/json.png";
import mas from "../assets/mas.png";

export const Cards = () => {
  return (
    <>
      <div id="navbar-card"></div>

      <hr id="separador" />

      <h1 id="titulo-proyectos">Proyectos</h1>

      <div className="contenedor-proyectos">
        <div className="contenedor-fila-proyectos">
          <div className="contenedor-cards" data-aos="flip-left">
            <div className="carta">
              <img className="portada-card" src={consultorio} alt="" />

              <h3 id="titulo-card-proyectos">Consultorio Web</h3>

              <p className="descripcion-cart">
                Proyecto de un consultorio web para dentistas que contiene un
                login y un CRUD para que los administradores puedan gestionar
                tanto a los dentistas como a los usuarios que asisten. Además,
                cuenta con tablas de registros y de turnos, y una base de datos
                diseñada y conectada con MySQL Workbench.
              </p>

              <hr />

              <div className="contenedor-lenguajes">
                <div className="lenguajes-utilizados">
                  <img src={html} alt="" />
                </div>
                <div className="lenguajes-utilizados">
                  <img src={css} alt="" />
                </div>
                <div className="lenguajes-utilizados">
                  <img src={js} alt="" />
                </div>
                <div className="lenguajes-utilizados">
                  <img src={react} alt="" />
                </div>
                <div className="lenguajes-utilizados">
                  <img src={sql} alt="" />
                </div>
              </div>
            </div>

            <div className="contenedor-code">
              <a id="code" href="" target="_blank">
                <span>Ver Proyecto</span>
              </a>

              <a
                href="https://github.com/FacundoJoaquinGil/consultorio-dentista-front"
                target="_blank"
              >
                <img id="img-code" src={code} alt="" />
              </a>
            </div>
          </div>
          <div className="contenedor-cards" data-aos="flip-left">
            <div className="carta">
              <img className="portada-card" src={tienda} alt="" />

              <h3 id="titulo-card-proyectos">Tienda de Ropa</h3>

              <p className="descripcion-cart">
                Proyecto de página web de venta de ropa diseñado con React/Vite,
                el cual tiene un CRUD para administradores que permite agregar,
                eliminar y editar prendas. Estas se alojan en una base de datos
                local hecha con JSON Server, y cada prenda subida redirige al
                comprador al WhatsApp del vendedor.
              </p>

              <hr />

              <div className="contenedor-lenguajes">
                <div className="lenguajes-utilizados">
                  <img src={html} alt="" />
                </div>
                <div className="lenguajes-utilizados">
                  <img src={css} alt="" />
                </div>
                <div className="lenguajes-utilizados">
                  <img src={js} alt="" />
                </div>
                <div className="lenguajes-utilizados">
                  <img src={react} alt="" />
                </div>
                <div className="lenguajes-utilizados">
                  <img src={json} alt="" />
                </div>
              </div>
            </div>

            <div className="contenedor-code">
              <a
                id="code"
                href="https://proyecto-tienda-ropa-react.netlify.app/"
                target="_blank"
              >
                <span>Ver Proyecto</span>
              </a>

              <a
                href="https://github.com/FacundoJoaquinGil/Proyecto-Tienda-Ropa"
                target="_blank"
              >
                <img id="img-code" src={code} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="contenedor-fila-proyectos">
          <div className="contenedor-cards" data-aos="flip-left">
            <div className="carta">
              <img className="portada-card" src={biblioteca} alt="" />

              <h3 id="titulo-card-proyectos">Biblioteca Escolar</h3>

              <p className="descripcion-cart">
                Proyecto de biblioteca escolar que contiene un CRUD que permite
                agregar libros, eliminarlos y editarlos, además me permite hacer
                lo mismo con usuarios, y prestar libros con una fecha límite de
                préstamo, entre otras validaciones. La misma contiene una base
                de datos local hecha con JSON Server.
              </p>

              <hr />

              <div className="contenedor-lenguajes">
                <div className="lenguajes-utilizados">
                  <img src={html} alt="" />
                </div>
                <div className="lenguajes-utilizados">
                  <img src={css} alt="" />
                </div>
                <div className="lenguajes-utilizados">
                  <img src={js} alt="" />
                </div>
                <div className="lenguajes-utilizados">
                  <img src={json} alt="" />
                </div>
              </div>
            </div>

            <div className="contenedor-code">
              <a
                id="code"
                href="https://biblioteca-escolar-js.netlify.app/"
                target="_blank"
              >
                <span>Ver Proyecto</span>
              </a>

              <a
                href="https://github.com/FacundoJoaquinGil/biblioteca-escolar"
                target="_blank"
              >
                <img id="img-code" src={code} alt="" />
              </a>
            </div>
          </div>

          <div className="contenedor-cards" data-aos="flip-left">
            <div className="carta">
              <img className="portada-card" src={clima} alt="" />

              <h3 id="titulo-card-proyectos">Aplicacion de Clima</h3>

              <p className="descripcion-cart">
                Proyecto de página web para saber el tiempo climático, el cual
                me permite conocer la temperatura, humedad y una breve
                descripción de cómo está el clima. Consumo una API gratuita que
                además me permite traducirla a distintos idiomas y buscar
                ciudades de todo el mundo y su respectivo país.
              </p>

              <hr />

              <div className="contenedor-lenguajes">
                <div className="lenguajes-utilizados">
                  <img src={html} alt="" />
                </div>
                <div className="lenguajes-utilizados">
                  <img src={css} alt="" />
                </div>
                <div className="lenguajes-utilizados">
                  <img src={js} alt="" />
                </div>
              </div>
            </div>

            <div className="contenedor-code">
              <a
                id="code"
                href="https://aplicacion-clima-api-js.netlify.app/"
                target="_blank"
              >
                <span>Ver Proyecto</span>
              </a>

              <a
                href="https://github.com/FacundoJoaquinGil/aplicacion-clima"
                target="_blank"
              >
                <img id="img-code" src={code} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-card">
        <a
          className="contenedor-ver-mas-proyectos"
          href="https://github.com/FacundoJoaquinGil?tab=repositories"
          target="_blank"
        >
          <span id="boton-ver-mas-proyectos">Mira mas proyectos aqui</span>
          <img id="mas" src={mas} />
        </a>
      </div>
    </>
  );
};
