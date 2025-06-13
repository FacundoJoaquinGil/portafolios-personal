import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";
import "../styles/VerTodasTecnologias.css";
import flecha from "../assets/flecha.png";
import css from "../assets/css.png";
import html from "../assets/html.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import bootstrap from "../assets/bootstrap.png";
import node from "../assets/node.png";
import sql from "../assets/sql.png";
import git from "../assets/git-logo.png";
import mongo from "../assets/mongo.png";
import docker from "../assets/docker.png";
import postman from "../assets/postman.png";
import CSharp from "../assets/CSharp.png";
import python from "../assets/python.png";
import firebase from "../assets/firebase.png";
import tsc from "../assets/tsc.png";
import angular from "../assets/angular.png";

export const VerTodasTecnologias = () => {
  const { t } = useTranslation();

  const skills = [
    { src: html, alt: "HTML" },
    { src: css, alt: "CSS" },
    { src: js, alt: "JavaScript" },
    { src: react, alt: "React" },
    { src: bootstrap, alt: "Bootstrap" },
    { src: node, alt: "Node.js" },
    { src: sql, alt: "SQL" },
    { src: CSharp, alt: "C#" },
    { src: mongo, alt: "MongoDB" },
    { src: docker, alt: "Docker" },
    { src: postman, alt: "Postman" },
    { src: python, alt: "Python" },
    { src: firebase, alt: "Firebase" },
    { src: tsc, alt: "TypeScript" },
    { src: git, alt: "Git" },
    { src: angular, alt: "Angular" },
  ];

  const mostrarTodasTecnologias = () => {
    const skillsHTML = `
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; padding: 10px;">
        ${skills
          .map(
            (skill) => `
          <div class="skill-item" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
            <img src="${skill.src}" alt="${skill.alt}" style="width: 50px; height: 50px; margin-bottom: 8px;">
            <span style="font-size: 14px;">${skill.alt}</span>
          </div>
        `
          )
          .join("")}
      </div>
    `;

    Swal.fire({
      title: t("tecnologias-seccion.modal-titulo"),
      html: skillsHTML,
      width: "800px",
      showCloseButton: true,
      showConfirmButton: false,
      customClass: {
        popup: "swal-custom-popup",
      },
    });
  };

  return (
    <button className="contenedor-curriculum" onClick={mostrarTodasTecnologias}>
      <span id="curriculum">{t("tecnologias-seccion.boton")}</span>
      <img id="flecha" src={flecha} />
    </button>
  );
};
