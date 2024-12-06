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
import python from "../assets/python.png";
import CSharp from "../assets/CSharp.png";
import hosp from "../assets/hospital.jpg";
import yaya from "../assets/yaya.png";
import trans from "../assets/Transcriptor.jpg";

export const Cards = () => {
  return (
    <div className="bg-cards">
      <hr id="separador" />
      <h1 id="titulo-proyectos">Proyectos Destacables</h1>

      <div className="container">
        <div className="row justify-content-center g-0">
          <div
            className="col-lg-4 col-md-6 col-sm-12 contenedor-cards"
            data-aos="flip-left"
          >
            <div className="carta">
              <img className="portada-card" src={hosp} alt="" />
              <h3 id="titulo-card-proyectos">Pagina Web Hospital</h3>
              <p className="descripcion-cart">
                Plataforma web para el Hospital de San Pablo-Tucumán que permite
                a los visitantes informarse sobre noticias médicas, consultar el
                personal disponible y sus horarios. Cuenta con un panel de
                administración donde los administradores pueden gestionar y
                crear usuarios, y subir documentación destinada al personal del
                hospital.
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
                  <img src={react} alt="" />
                </div>
                <div className="lenguajes-utilizados">
                  <img src={node} alt="" />
                </div>
                <div className="lenguajes-utilizados">
                  <img src={sql} alt="" />
                </div>
              </div>
            </div>
            <div className="contenedor-code">
              <a
                className="contenedor-link"
                href="https://github.com/FacundoJoaquinGil/Web-Hospital-SP"
                target="_blank"
              >
                <span id="link-proyecto">Ver Proyecto</span>
                <img id="img-codigo" src={code} alt="" />
              </a>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-12 contenedor-cards"
            data-aos="flip-left"
          >
            <div className="carta">
              <img className="portada-card" src={consultorio} alt="" />
              <h3 id="titulo-card-proyectos">Consultorio Dentista</h3>
              <p className="descripcion-cart">
                Página web de venta de ropa diseñada con React y Vite. Incluye
                un CRUD para que los administradores gestionen prendas,
                permitiendo agregar, eliminar o editar artículos. Su diseño es
                intuitivo y fácil de usar, adaptado para una experiencia de
                escritorio eficiente.
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
                  <img src={react} alt="" />
                </div>
                <div className="lenguajes-utilizados">
                  <img src={node} alt="" />
                </div>
                <div className="lenguajes-utilizados">
                  <img src={sql} alt="" />
                </div>
              </div>
            </div>
            <div className="contenedor-code">
              <a
                className="contenedor-link"
                href="https://github.com/FacundoJoaquinGil/consultorio-dentista-front"
                target="_blank"
              >
                <span id="link-proyecto">Ver Proyecto</span>
                <img id="img-codigo" src={code} alt="" />
              </a>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-12 contenedor-cards"
            data-aos="flip-left"
          >
            <div className="carta">
              <img className="portada-card" src={tienda} alt="" />
              <h3 id="titulo-card-proyectos">Tienda de Ropa</h3>
              <p className="descripcion-cart">
                Página web de venta de ropa diseñada con React y Vite. Incluye
                un CRUD para que los administradores gestionen prendas,
                permitiendo agregar, eliminar o editar artículos. La interfaz es
                moderna y está optimizada para ofrecer una experiencia fluida en
                diferentes dispositivos.
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
                className="contenedor-link"
                href="https://github.com/FacundoJoaquinGil/Proyecto-Tienda-Ropa"
                target="_blank"
              >
                <span id="link-proyecto">Ver Proyecto</span>
                <img id="img-codigo" src={code} alt="" />
              </a>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-12 contenedor-cards"
            data-aos="flip-left"
          >
            <div className="carta">
              <img className="portada-card" src={biblioteca} alt="" />
              <h3 id="titulo-card-proyectos">Biblioteca Escolar</h3>
              <p className="descripcion-cart">
                Biblioteca escolar con un sistema CRUD completo que permite
                agregar libros, eliminarlos o editarlos. Además, incluye la
                posibilidad de gestionar usuarios y realizar préstamos con
                fechas límite. Es ideal para mantener el control del inventario
                y las transacciones de libros.
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
                className="contenedor-link"
                href="https://github.com/FacundoJoaquinGil/biblioteca-escolar"
                target="_blank"
              >
                <span id="link-proyecto">Ver Proyecto</span>
                <img id="img-codigo" src={code} alt="" />
              </a>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-12 contenedor-cards"
            data-aos="flip-left"
          >
            <div className="carta">
              <img className="portada-card" src={yaya} alt="" />
              <h3 id="titulo-card-proyectos">La Yaya Eventos App</h3>
              <p className="descripcion-cart">
                Aplicación para organizadores de eventos que permite generar
                presupuestos detallados. Los cálculos incluyen costos de comida,
                pago de mozos, ayudantes de cocina y otros gastos relacionados.
                Es una herramienta práctica y eficiente, ideal para mejorar la
                planificación y organización de eventos.
              </p>
              <hr />
              <div className="contenedor-lenguajes">
                <div className="lenguajes-utilizados">
                  <img src={CSharp} alt="" />
                </div>
              </div>
            </div>
            <div className="contenedor-code">
              <a
                className="contenedor-link"
                href="https://github.com/FacundoJoaquinGil/La-Yaya-Eventos-App"
                target="_blank"
              >
                <span id="link-proyecto">Ver Proyecto</span>
                <img id="img-codigo" src={code} alt="" />
              </a>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-12 contenedor-cards"
            data-aos="flip-left"
          >
            <div className="carta">
              <img className="portada-card" src={trans} alt="" />
              <h3 id="titulo-card-proyectos">Trascriptor de Voz</h3>
              <p className="descripcion-cart">
                Proyecto que transforma archivos de audio en texto mediante la
                biblioteca pydub. Diseñado para facilitar la transcripción de
                notas de voz, conferencias u otros audios hablados, automatiza
                el proceso para ahorrar tiempo. Es una solución útil para
                estudiantes, profesionales y periodistas.
              </p>
              <hr />
              <div className="contenedor-lenguajes">
                <div className="lenguajes-utilizados">
                  <img src={python} alt="" />
                </div>
              </div>
            </div>
            <div className="contenedor-code">
              <a
                className="contenedor-link"
                href="https://github.com/FacundoJoaquinGil/transcriptor-voz-python"
                target="_blank"
              >
                <span id="link-proyecto">Ver Proyecto</span>
                <img id="img-codigo" src={code} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
