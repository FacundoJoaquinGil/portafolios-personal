import { useTranslation } from "react-i18next";

export const SobreMi = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="contenedor-sm">
        <div className="bg-sm" data-aos="fade-up">
          <h1 id="sm-titulo">{t("sobre-mi-seccion.sobre-Mi-Titulo")}</h1>
          <div className="contenedor-desc">
            <p id="descripcion-sm">
              {t("sobre-mi-seccion.desc")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
