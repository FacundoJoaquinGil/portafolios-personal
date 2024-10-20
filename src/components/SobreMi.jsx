import imgsm from "../assets/img-sm.jpg";

export const SobreMi = () => {
  return (
    <>
      <div className="contenedor-sm">
        <div data-aos="fade-up">
          <h1 id="sm-titulo">Sobre Mi:</h1>
          <div className="contenedor-desc-lista">
            <p id="descripcion-sm">
              Autodidacta, curioso y responsable, con una sólida formación como
              Técnico Universitario en Programación por la Universidad
              Tecnológica Nacional. A mis 25 años, resido en Tucumán, Argentina,
              y me apasiona el aprendizaje continuo y la creación de soluciones
              tecnológicas efectivas. Estoy plenamente disponible para asumir
              nuevos desafíos laborales y contribuir con mi experiencia y
              dedicación.
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
