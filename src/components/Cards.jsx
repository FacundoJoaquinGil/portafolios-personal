import clima from "../assets/clima.jpg";
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
              <img
                className="portada-card"
                src="https://www.comunidadbaratz.com/wp-content/uploads/OpenLibra.png"
                alt=""
              />

              <h3 id="titulo-card-proyectos">Consultorio Web</h3>

              <p className="descripcion-cart">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                nostrum dicta itaque harum corporis, vel tempora dolores
                voluptatem ullam esse dignissimos incidunt, eligendi labore nemo
                iste, officiis debitis? Cumque, corrupti?
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

              <a href="" target="_blank">
                <img id="img-code" src={code} alt="" />
              </a>
            </div>
          </div>
          <div className="contenedor-cards" data-aos="flip-left">
            <div className="carta">
              <img className="portada-card" src="" alt="" />

              <h3 id="titulo-card-proyectos">Proyecto Tienda Ropa</h3>

              <p className="descripcion-cart">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                nostrum dicta itaque harum corporis, vel tempora dolores
                voluptatem ullam esse dignissimos incidunt, eligendi labore nemo
                iste, officiis debitis? Cumque, corrupti?
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
              </div>
            </div>

            <div className="contenedor-code">
              <a id="code" href="" target="_blank">
                <span>Ver Proyecto</span>
              </a>

              <a href="" target="_blank">
                <img id="img-code" src={code} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="contenedor-fila-proyectos"> 
        <div className="contenedor-cards" data-aos="flip-left">
          <div className="carta">
            <img className="portada-card" src="" alt="" />

            <h3 id="titulo-card-proyectos">Proyecto Libreria</h3>

            <p className="descripcion-cart">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae accusantium perspiciatis, doloremque ea veniam
              necessitatibus velit consequuntur suscipit error inventore, rem
              nemo ab ipsam assumenda quasi sit quaerat pariatur eligendi?
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
            <a id="code" href="" target="_blank">
              <span>Ver Proyecto</span>
            </a>

            <a href="" target="_blank">
              <img id="img-code" src={code} alt="" />
            </a>
          </div>
        </div>

        <div className="contenedor-cards" data-aos="flip-left">
          <div className="carta">
            <img className="portada-card" src={clima} alt="" />

            <h3 id="titulo-card-proyectos">Aplicacion de Clima</h3>

            <p className="descripcion-cart">
              Aplicacion del clima hecha con html, css y javascript en la cual
              consumo una api gratuita que ademas me permite traducirla a
              distintos idiomas, utilizo un input y un boton que me permiten
              buscar ciudades de todo el mundo
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
        <a className="contenedor-ver-mas-proyectos" href="" target="_blank">
          <span id="boton-ver-mas-proyectos">Mira mas proyectos aqui</span>
          <img id="mas" src={mas} />
        </a>
      </div>
    </>
  );
};
