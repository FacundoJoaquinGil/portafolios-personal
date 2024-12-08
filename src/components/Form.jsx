import mail from "../assets/mail.png";
import telefono from "../assets/telefono.png";
import discord from "../assets/discord.png";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export const Form = () => {
  const form = useRef();

  const mensajeEnviado = () => {


    const userName = form.current.user_name.value;
    const userEmail = form.current.user_email.value;
    const message = form.current.message.value;

    if (!userName || !userEmail || !message) {
      return false;
    }

    Swal.fire({
      title: "Enviando Mensaje...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!mensajeEnviado()) {
      return;
    }

    emailjs
      .sendForm("service_kv3h4b8", "template_dr8henf", form.current, {
        publicKey: "NubU2nN3Pc99shCns",
      })
      .then(
        () => {
          Swal.fire({
            title: "Enviado!",
            text: "Tu mensaje se envió correctamente :)",
            icon: "success",
          });
          console.log("SUCCESS!");
          form.current.reset();
        },
        () => {
          Swal.fire({
            icon: "error",
            title: "Error!",
            text: "Se ha producido un error inesperado :("
          });
          console.log("FAILED...");
        }
      );
  };

  return (
    <>
      <hr id="separador" />

      <h1 id="sm-titulo">Contactos</h1>

      <div className="contenedor-form" data-aos="fade-up">
        <div className="sub-contenedor-form">
          <form className="card-form" ref={form} onSubmit={sendEmail}>
            <div className="form-image"></div>

            <div className="input">
              <input id="input-nombre" type="text" name="user_name" required />
              <label id="label-nombre">Nombre</label>
            </div>

            <div className="input">
              <input id="input-mail" type="text" name="user_email" required />
              <label id="label-email">Email o Telefono</label>
            </div>

            <div className="input">
              <input id="input-msj" type="text" name="message" required />
              <label id="label-msj">Mensaje</label>
            </div>

            <div className="contenedor-boton">
              <button id="boton-enviar" type="submit" value="Send">
                Enviar
              </button>
            </div>
          </form>
        </div>

        <div className="contenedor-desc-contacto">
          <div className="columna">
            <div className="fila">
              <div className="img-desc-contacto">
                <img src={mail} alt="" />
              </div>

              <div className="desc-contacto">
                <h4 id="titulo-desc-contacto">Email</h4>
                <p id="parrafo-desc-contacto">facundojoagl@gmail.com</p>
              </div>
            </div>

            <div className="fila">
              <div className="img-desc-contacto">
                <img src={telefono} alt="" />
              </div>

              <div className="desc-contacto">
                <h4 id="titulo-desc-contacto">Telefono</h4>
                <p id="parrafo-desc-contacto">+54 3816566750</p>
              </div>
            </div>

            <div className="fila">
              <div className="img-desc-contacto">
                <img src={discord} alt="" />
              </div>

              <div className="desc-contacto">
                <h4 id="titulo-desc-contacto">Discord</h4>
                <p id="parrafo-desc-contacto">fac.joaquin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
