
export const Form = () => {
  return (
    <>
        <div id="navbar-form"></div>
        <div className="contenedor-form"  >
        
            <div className="sub-contenedor-form" data-aos="fade-left">

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
        </div>

    </>
  )
}
