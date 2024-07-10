import perfil from "../assets/perfil1.png";
import linkedin from "../assets/linkedin-logo.png";
import git from "../assets/git-logo.png";
import flecha from "../assets/flecha.png";

export const Home = () => {
  return (
    <>
      <div className="contenedor-home">

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

            <a href="https://www.linkedin.com/in/facundo-joaqu%C3%ADn-gil-21b3a3303/" target="_blank">
              <img id="linkedin" src={linkedin}></img>
            </a>

            <a href="https://github.com/FacundoJoaquinGil" target="_blank">
              <img id="git" src={git}></img>
            </a>

          </div>

            <a className="contenedor-curriculum" href="https://drive.google.com/file/d/1oKxt5R6lrdq6Tu5GeNszw1njYCMTF_-y/view?usp=sharing" target="_blank">
              <span id="curriculum">Ver Curriculum</span>
              <img id="flecha" src={flecha} />
            </a>

        </div>

      </div>
    </>
  );
};
