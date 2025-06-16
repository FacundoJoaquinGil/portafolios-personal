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
import ts from "../assets/tsc.png";
import angular from "../assets/angular.png";
import CSharp from "../assets/CSharp.png";
import hosp from "../assets/hospital.jpg";
import oca from "../assets/oca.png";
import tiendaAG from "../assets/tienda-angular.jpg";
import { useTranslation } from "react-i18next";

export const Cards = () => {

  const { t } = useTranslation();

  return (
    <div className="bg-cards">
      <hr id="separador" />
      <h1 id="titulo-proyectos">{t("proyectos-seccion.proyectos-titulo")}</h1>

      <div className="container">
        <div className="row justify-content-center g-0">
          <div
            className="col-lg-4 col-md-6 col-sm-12 contenedor-cards"
            data-aos="flip-left"
          >
            <div className="carta">
              <img className="portada-card" src={hosp} alt="" />
              <h3 id="titulo-card-proyectos">{t("proyectos-seccion.hospital.titulo")}</h3>
              <p className="descripcion-cart">{t("proyectos-seccion.hospital.desc")}</p>
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
                <span id="link-proyecto">{t("proyectos-seccion.hospital.ver")}</span>
                <img id="img-codigo" src={code} alt="" />
              </a>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-12 contenedor-cards"
            data-aos="flip-left"
          >
            <div className="carta">
              <img className="portada-card" src={tiendaAG} alt="" />
              <h3 id="titulo-card-proyectos">{t("proyectos-seccion.tienda.titulo")}</h3>
              <p className="descripcion-cart">{t("proyectos-seccion.tienda.desc")}</p>
              <hr />
              <div className="contenedor-lenguajes">
                <div className="lenguajes-utilizados">
                  <img src={angular} alt="" />
                </div>
                <div className="lenguajes-utilizados">
                  <img src={ts} alt="" />
                </div>
                <div className="lenguajes-utilizados">
                  <img src={html} alt="" />
                </div>
                <div className="lenguajes-utilizados">
                  <img src={css} alt="" />
                </div>
              </div>
            </div>
            <div className="contenedor-code">
              <a
                className="contenedor-link"
                href="https://github.com/FacundoJoaquinGil/landingPage-Angular"
                target="_blank"
              >
                <span id="link-proyecto">{t("proyectos-seccion.tienda.ver")}</span>
                <img id="img-codigo" src={code} alt="" />
              </a>
            </div>
          </div>

          
          <div
            className="col-lg-4 col-md-6 col-sm-12 contenedor-cards"
            data-aos="flip-left"
          >
            <div className="carta">
              <img className="portada-card" src={oca} alt="" />
              <h3 id="titulo-card-proyectos">{t("proyectos-seccion.ocaranza-software.titulo")}</h3>
              <p className="descripcion-cart">{t("proyectos-seccion.ocaranza-software.desc")}</p>
              <hr />
              <div className="contenedor-lenguajes">
                <div className="lenguajes-utilizados">
                  <img src={CSharp} alt="" />
                </div>
                <div className="lenguajes-utilizados">
                  <img src={sql} alt="" />
                </div>
              </div>
            </div>
            <div className="contenedor-code">
              <a
                className="contenedor-link"
                href="https://github.com/FacundoJoaquinGil/AppMecanica"
                target="_blank"
              >
                <span id="link-proyecto">{t("proyectos-seccion.ocaranza-software.ver")}</span>
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
              <h3 id="titulo-card-proyectos">{t("proyectos-seccion.consultorio-dentista.titulo")}</h3>
              <p className="descripcion-cart">{t("proyectos-seccion.consultorio-dentista.desc")}</p>
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
                <span id="link-proyecto">{t("proyectos-seccion.consultorio-dentista.ver")}</span>
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
              <h3 id="titulo-card-proyectos">{t("proyectos-seccion.tienda-ropa.titulo")}</h3>
              <p className="descripcion-cart">{t("proyectos-seccion.tienda-ropa.desc")}</p>
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
                <span id="link-proyecto">{t("proyectos-seccion.tienda-ropa.ver")}</span>
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
              <h3 id="titulo-card-proyectos">{t("proyectos-seccion.biblioteca-escolar.titulo")}</h3>
              <p className="descripcion-cart">{t("proyectos-seccion.biblioteca-escolar.desc")}</p>
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
                <span id="link-proyecto">{t("proyectos-seccion.biblioteca-escolar.ver")}</span>
                <img id="img-codigo" src={code} alt="" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};