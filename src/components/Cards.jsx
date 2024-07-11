

import html  from '../assets/html.png'
import css  from '../assets/css.png'
import js  from '../assets/js.png'
import react  from '../assets/react.png'
import node  from '../assets/node.png'


export const Cards = () => {
  return (
    <>
    <div id="navbar-card"></div>

    <hr id='separador-proyectos'/>

    <h1 id='titulo-proyectos'>Proyectos</h1>

    <div className='contenedor-proyectos'>

        <div className="contenedor-cards" data-aos="flip-left">

          <div className='carta'>

            <img className='portada-card' src="https://www.comunidadbaratz.com/wp-content/uploads/OpenLibra.png" alt="" />

            <h2 id='titulo-card-proyectos'>Consultorio Web</h2>

            <p className='descripcion-cart'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet illo eligendi doloribus facere ad iste, maxime suscipit officiis aut soluta dolore. Corporis blanditiis adipisci molestias consequatur facere, sequi et? Illum?</p>
            
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
        
        <div className="contenedor-cards" data-aos="flip-left">

          <div className='carta'>

            <img className='portada-card' src="https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots_2020/Plantillas-de-diseno-IONOS-sector-medico.png" alt="" />

            <h2 id='titulo-card-proyectos'>Librerira</h2>

            <p className='descripcion-cart'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis deserunt est voluptatem fugit pariatur a quae eum provident, explicabo quidem reprehenderit, exercitationem distinctio, ullam ea blanditiis doloribus quos. Itaque, similique.</p>
            
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
              <div className='lenguajes-utilizados'>
                <img src={react} alt="" />
              </div>
              <div className='lenguajes-utilizados'>
                <img src={node} alt="" />
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
