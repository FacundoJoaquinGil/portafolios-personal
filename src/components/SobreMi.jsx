import imgsm from "../assets/img-sm.jpg";
import { useTranslation } from "react-i18next";

export const SobreMi = () => {

  const { t } = useTranslation();

  return (
    <>
      <div className="contenedor-sm">
        <div data-aos="fade-up">
          <h1 id="sm-titulo">{t("sobre-mi-seccion.sobre-Mi-Titulo")}</h1>
          <div className="contenedor-desc-lista">
            <p id="descripcion-sm">
              {t("sobre-mi-seccion.desc")}
            </p>

            <div className="contenedor-imagen-sm">
              <img id="img-sm" src={imgsm} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
