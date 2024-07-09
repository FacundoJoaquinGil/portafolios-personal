import css from "../assets/css.png";
import html from "../assets/html.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import bootstrap from "../assets/bootstrap.png";
import node from "../assets/node.png";
import sql from "../assets/sql.png";
import git from "../assets/git-logo.png";

export const HabilidadesTecnicas = () => {
  return (
    <>
      <div className="contenedor-skills" >
        <h3 id="ht-titulo">Habilidades Tecnicas</h3>

        <div id="contenedor-box" data-aos="fade-right">

          <a  href=""><img id="box" src={html} alt="" /></a>
          <a  href=""><img id="box" src={css} alt="" /></a>
          <a  href=""><img id="box" src={js} alt="" /></a>
          <a  href=""><img id="box" src={react} alt="" /></a>
          <a  href=""><img id="box" src={bootstrap} alt="" /></a>
          <a  href=""><img id="box" src={node} alt="" /></a>
          <a  href=""><img id="box" src={sql} alt="" /></a>
          <a  href=""><img id="box" src={git} alt="" /></a>

        </div>

      </div>
    </>
    
  )
}
