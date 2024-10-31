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
import git from "../assets/git-logo-blanco.png";
import python from "../assets/python.png";
import CSharp from "../assets/CSharp.png";
import hosp from "../assets/hospital.jpg";
import yaya from "../assets/yaya.png";

export const Cards = () => {
  return (
    <>
      <hr id="separador" />
      <h1 id="titulo-proyectos">Proyectos Destacables</h1>

      <div className="container">
        <div className="row justify-content-center">
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
                Proyecto de un consultorio web para dentistas que incluye un
                sistema de login y un CRUD para que los administradores
                gestionen tanto a los dentistas como a los pacientes.
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
                Proyecto de página web de venta de ropa diseñado con React/Vite,
                el cual tiene un CRUD para administradores que permite agregar,
                eliminar y editar prendas.
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
                Proyecto de biblioteca escolar que contiene un CRUD que permite
                agregar libros, eliminarlos y editarlos, además me permite hacer
                lo mismo con usuarios, y prestar libros con una fecha límite de
                préstamo.
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
                Una aplicación creada para ayudar a los organizadores de eventos
                a generar presupuestos detallados. Los presupuestos incluyen los
                costos de la comida, pago de mozos, ayudantes de cocina y otros
                gastos asociados.
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
              <img className="portada-card" src={""} alt="" />
              <h3 id="titulo-card-proyectos">Trascriptor de Voz</h3>
              <p className="descripcion-cart">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                minus neque nemo, impedit reprehenderit quos odio quam? Quisquam
                ab ducimus quaerat, modi nemo rerum quam reiciendis porro
                explicabo sed temporibus!
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
                href="https://github.com/FacundoJoaquinGil/biblioteca-escolar"
                target="_blank"
              >
                <span id="link-proyecto">Ver Proyecto</span>
                <img id="img-codigo" src={code} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
