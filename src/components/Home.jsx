import perfil from "../assets/perfil2.jpg";
import linkedin from "../assets/linkedin-logo.png";
import git from "../assets/git-logo.png";
import flecha from "../assets/flecha.png";
import cv from "../assets/cv.pdf";
import download from "../assets/download.png";
import Swal from "sweetalert2";

export const Home = () => {
  const mostrarCurriculum = () => {
    Swal.fire({
      html: `
        <div 
          style="
            overflow-y: auto; 
            max-height: 80vh; 
            text-align: center; 
            scrollbar-width: thin;
            scrollbar-color: #888 #e0e0e0;
          "
          class="custom-scrollbar"
        >
          <img 
            src="src/assets/cv.jpeg" 
            alt="CV Image" 
            style="width: 100%; max-width: 789px; height: auto;" 
          />
        </div>
      `,
      showConfirmButton: true,
      confirmButtonText: "Volver",
      width: "auto",
    });
  };

  return (
    <>
      <div className="contenedor-home">
        <div className="contenedor-encabezado">
          <div className="contenedor-titulos">
            <h1 id="titulo">Facundo Joaquin Gil</h1>
            <h3 id="subtitulo">Programador Fullstack</h3>
            <span id="saludo">console.log(&quot;Hola Mundo!&quot;);</span>
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

          <div className="contenedor-cvs">
            
            <button
              className="contenedor-curriculum"
              onClick={mostrarCurriculum}
            >
              <span id="curriculum">Ver Curriculum</span>
              <img id="flecha" src={flecha} />
            </button>

            <a className="contenedor-download" href={cv} download="cv.pdf">
              <img id="img-download" src={download} alt="Descargar CV" />
            </a>

          </div>
        </div>
      </div>
    </>
  );
};
