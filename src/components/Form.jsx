
export const Form = () => {
  return (
    <>
        <div className="contenedor-form"  >
        
            <div className="sub-contenedor-form" data-aos="fade-left">

                <div className="form-image"></div>

                    <form className="card-form">

                        <div className="input">
                            <input id="input-texto" type="text" required/>
                            <label id="titulo">Nombre</label>
                        </div>

                        <div className="input">
                            <input id="input-texto" type="text" required/>
                            <label id="titulo">Email</label>
                        </div>

                        <div className="input">
                            <input id="input-texto" type="text" required/>
                            <label id="titulo">Mensaje</label>
                        </div>

                        <div className="contenedor-boton">
                            <button id="boton-enviar">Enviar</button>   
                        </div>

                    </form>
                
            </div>
        </div>

    </>
  )
}
