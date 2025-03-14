import perfil from "../assets/perfil2.jpg";
import linkedin from "../assets/linkedin-logo.png";
import git from "../assets/git-logo.png";
import flecha from "../assets/flecha.png";
import cv from "../assets/cv.pdf";
import download from "../assets/download.png";
import cvImg from "../assets/cv.jpg";
import Swal from "sweetalert2";

export const Home = () => {

  const mostrarCurriculum = async () => {
    try {
      
      Swal.fire({
        html: `
          <div 
            style="
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
            "
          >
            <div class="spinner" style="
              border: 4px solid rgba(0, 0, 0, 0.1);
              border-top: 4px solid #007BFF;
              border-radius: 50%;
              width: 40px;
              height: 40px;
              animation: spin 1s linear infinite;
            "></div>
            <p style="margin-top: 10px;">Cargando...</p>
          </div>
          <style>
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          </style>
        `,
        showConfirmButton: false,
        allowOutsideClick: false,
        width: "auto",
      });

      const imagenCargada = new Promise((resolve) => {
        const img = new Image();
        img.src = cvImg;
        img.onload = () => resolve(img);
        
      });

      const img = await imagenCargada;

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
              src="${img.src}" 
              alt="CV Image" 
              style="width: 100%; max-width: 789px; height: auto;" 
            />
          </div>
        `,
        showConfirmButton: true,
        confirmButtonText: "Volver",
        width: "auto",
      });
    } catch (error) {
      console.error("Error mostrando el CV:", error);
      Swal.fire(
        "Error",
        "Hubo un problema al cargar el CV. Intenta nuevamente.",
        "error"
      );
    }
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
