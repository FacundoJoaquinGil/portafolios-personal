import libreria  from '../assets/libreria.jpg'
import html  from '../assets/html.png'
import css  from '../assets/css.png'
import js  from '../assets/js.png'


export const Cards = () => {
  return (
    <>
    <div id="navbar-card"></div>
    <div className='contenedor-proyectos'>

     <h1 id='titulo-proyectos'>Proyectos</h1>
    
        <div className="contenedor-card" data-aos="flip-left">

          <div className='carta'>

            <img className='portada-card' src={libreria} alt="" />

            <h2 id='titulo-card-proyectos'>Librerira</h2>

            <p className='descripcion-cart'>Libreria hecha con javascript entre compas ara rendis un final de la facultas. esta hecha con una base de datos local con JSON Server, osea god</p>
            
            <hr/>
            
            <div className='contenedor-lenguajes'>

              <div className='lenguajes-utilizados'>
                <img src={html} alt="" />
              </div>
              <div className='lenguajes-utilizados'>
                <img src={css} alt="" />
              </div>
              <div className='lenguajes-utilizados'>
                <img src={js} alt="" />
              </div>

              
                           
            </div>

          </div>

          <div className="contenedor-code">
          <a  href="https://github.com/FacundoJoaquinGil" target="_blank">
              <span id="code">Ver Codigo</span>
          </a>
          </div>

        </div>
        
    </div>
    </>
  )
}
