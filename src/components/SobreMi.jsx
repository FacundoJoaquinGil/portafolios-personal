export const SobreMi = () => {
  return (
    <>
      <div id="navbar-sm"></div>

      <div className="contenedor-sm">
        <div data-aos="fade-up">
          <h1 id="sm-titulo">Sobre Mi:</h1>

          <div className="contenedor-desc-lista">
            <p id="descripcion-sm">
              Autodidacta, curioso y responsable. Comprometido con el
              aprendizaje continuo y el desarrollo de soluciones tecnológicas
              efectivas. Excelente disposición para enfrentar desafíos laborales
            </p>

            <div className="contenedor-lista">
              <ul id="lista">
                <li>Edad: 24 Años</li>
                <li>Fecha De Nacimiento: 12/10/1999</li>
                <li>Nacionalidad: Argentina</li>
                <li>Residencia: Tucuman, Argentina</li>
                <li>Titulo Academico: Tecnico Universitario En Programacion</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
