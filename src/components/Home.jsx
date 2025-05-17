import perfil from "../assets/perfil2.png";
import linkedin from "../assets/linkedin-logo.png";
import git from "../assets/git-logo.png";
import flecha from "../assets/flecha.png";
import cv from "../assets/cv.pdf";
import download from "../assets/download.png";
import Swal from "sweetalert2";

export const Home = () => {

 const mostrarCurriculum = () => {
    window.open(cv, '_blank', 'noopener,noreferrer');
  };


  const handleDownload = async () => {
    try {

      Swal.fire({
        title: "Preparando descarga...",
        toast: true,
        position: "top-end",
        icon: "info",
        showConfirmButton: false,
        timerProgressBar: true,
        customClass: {
          popup: "custom-swal-toast",
        },
        didOpen: () => {
          Swal.showLoading(); 
        },
      });
  

      const response = await fetch(cv);
      if (!response.ok) {
        throw new Error("No se pudo acceder al archivo");
      }
  
      const link = document.createElement("a");
      link.href = cv;
      link.download = "CV_Joaquin_Gil.pdf";
      document.body.appendChild(link); 
      link.click(); 
      document.body.removeChild(link);
  

      Swal.fire({
        title: "Descarga iniciada",
        toast: true,
        position: "top-end",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      });
    } catch (error) {
      console.error("Error descargando el CV:", error);
  
      Swal.fire({
        title: "Error al descargar",
        text: "Hubo un problema al descargar el archivo. Por favor, intenta de nuevo.",
        icon: "error",
        confirmButtonText: "Entendido",
      });
    }
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

            <button className="contenedor-download" onClick={handleDownload}>
              <img id="img-download" src={download} alt="Descargar CV" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
