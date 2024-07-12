import mail from "../assets/mail.png";
import telefono from "../assets/telefono.png";
import discord from "../assets/discord.png";

export const Form = () => {
  return (
    <>
        <div id="navbar-form"></div>

        <hr id="separador-formulario"/>

        <h1 id="sm-titulo">Contactos</h1>
        
        <div className="contenedor-form" data-aos="fade-up">

            <div className="sub-contenedor-form">

                    <div className="form-image"></div>

                    <form className="card-form">

                        <div className="input">
                            <input id="input-texto" type="text" required/>
                            <label id="titulo-form">Nombre</label>
                        </div>

                        <div className="input">
                            <input id="input-texto" type="text" required/>
                            <label id="titulo-form">Email</label>
                        </div>

                        <div className="input">
                            <input id="input-texto" type="text" required/>
                            <label id="titulo-form">Mensaje</label>
                        </div>

                        <div className="contenedor-boton">
                            <button  id="boton-enviar" type="submit">Enviar</button>   
                        </div>

                    </form>
                
            </div>

                

            <div className="contenedor-desc-contacto">

                <div className="columna">

                    <div className="fila">

                        <div className="img-desc-contacto">
                            <img  src={mail} alt=""/>
                        </div>
                        
                        <div ClassName="desc-contacto">
                            <h4 id="titulo-desc-contacto">Email</h4>
                            <p id="parrafo-desc-contacto">facundojoagl@gmail.com</p>
                        </div>

                    </div>

                    <div className="fila">

                        <div className="img-desc-contacto">
                            <img  src={telefono} alt=""/>
                        </div>

                        <div ClassName="desc-contacto">
                            <h4 id="titulo-desc-contacto">Telefono</h4>
                            <p id="parrafo-desc-contacto">+54 3816566750</p>
                        </div>

                    </div>

                    <div className="fila">

                        <div className="img-desc-contacto">
                            <img  src={discord} alt=""/>
                        </div>

                        <div ClassName="desc-contacto">
                            <h4 id="titulo-desc-contacto">Discord</h4>
                            <p id="parrafo-desc-contacto">fakq</p>
                        </div>

                    </div>
                
                </div>
            </div>

        </div>
    </>
  )
}
