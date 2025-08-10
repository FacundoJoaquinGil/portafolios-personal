import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";
import "../styles/VerTodasTecnologias.css";
import expand from "../assets/expand.svg";
import { skills } from "../data/skillsData";


export const VerTodasTecnologias = () => {
  const { t } = useTranslation();

  const mostrarTodasTecnologias = () => {
    const skillsHTML = `
      <div class="skills-grid">
        ${skills
          .map(
            (skill) => `
          <div class="skill-item">
            <img src="${skill.src}" alt="${skill.alt}">
            <span>${skill.alt}</span>
          </div>
        `
          )
          .join("")}
      </div>
    `;

    Swal.fire({
      title: t("tecnologias-seccion.modal-titulo"),
      html: skillsHTML,
      showCloseButton: true,
      showConfirmButton: false,
      customClass: {
        popup: "swal-custom-popup",
      },
      width: "auto",
    });
  };

  return (
    <button className="expand-btn" onClick={mostrarTodasTecnologias}>
      <img id="expand" src={expand} />
      <span id="curriculum">{t("tecnologias-seccion.boton")}</span>
    </button>
  );
};
