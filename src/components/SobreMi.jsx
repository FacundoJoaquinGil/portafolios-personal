import imgsm from "../assets/img-sm.jpg";


export const SobreMi = () => {
  return (
    <>
      <div id="navbar-sm"></div>

      <div className="contenedor-sm">
        <div data-aos="fade-up">
          <h1 id="sm-titulo">Sobre Mi:</h1>
          <div className="contenedor-desc-lista">
            <p id="descripcion-sm">
              Autodidacta, curioso y responsable, con una sólida formación como
              Técnico Universitario en Programación por la Universidad
              Tecnológica Nacional - FRT. A mis 25 años, resido en Tucumán,
              Argentina, y me comprometo con el aprendizaje continuo y el
              desarrollo de soluciones tecnológicas efectivas, estando
              plenamente disponible para asumir cualquier desafío laboral.
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
