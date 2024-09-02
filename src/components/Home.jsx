import perfil from "../assets/perfil2.jpg";
import linkedin from "../assets/linkedin-logo.png";
import git from "../assets/git-logo.png";
import flecha from "../assets/flecha.png";

export const Home = () => {
  return (
    <>
      <div className="contenedor-home" data-aos="zoom-in">
        <div className="contenedor-encabezado">
          <div className="contenedor-titulos">
            <h1 id="titulo">Facundo Joaquin Gil</h1>
            <h3 id="subtitulo">Programador Fullstack</h3>
            <span id="saludo">print("Hola Mundo")</span>
          </div>

          <div className="contenedor-perfil">
            <img id="perfil-img" src={perfil} />
          </div>
        </div>

        <div className="footer">
          <div className="contenedor-redes">
            <a
              href="https://www.linkedin.com/in/facundo-joaqu%C3%ADn-gil-21b3a3303/"
              target="_blank"
            >
              <img id="linkedin" src={linkedin}></img>
            </a>

            <a href="https://github.com/FacundoJoaquinGil" target="_blank">
              <img id="git" src={git}></img>
            </a>
          </div>

          <a
            className="contenedor-curriculum"
            href="https://drive.google.com/file/d/1O0UOG-Ji9mL69roghTZvlyrw4b5NN4Y4/view?usp=sharing"
            
            target="_blank"
          >
            <span id="curriculum">Ver Curriculum</span>
            <img id="flecha" src={flecha} />
          </a>
        </div>
      </div>
    </>
  );
};
