
import { Nav, Navbar } from "react-bootstrap";
import { LanguageSelector } from "../components/LanguageSelector";
import { useTranslation } from 'react-i18next';

export const NavBar = () => {

  const { t } = useTranslation();

  const handleNavClick = (e, id) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Navbar expand="lg" className="contenedor-nav" data-bs-theme="dark">
      <Navbar.Toggle className="boton-nav" />
      <Navbar.Collapse className="justify-content-center">
        <Nav className="mx-auto justify-content-center" id="links">
            <a
              href="#sobre-mi"
              className="nav-link"
              onClick={(e) => handleNavClick(e, "#sobre-mi")}
            >
              {t('nav.sobre-mi')}
            </a>
            <a
              href="#proyectos"
              className="nav-link"
              onClick={(e) => handleNavClick(e, "#proyectos")}
            >
              {t('nav.proyectos')}
            </a>
            <a
              href="#skills"
              className="nav-link"
              onClick={(e) => handleNavClick(e, "#skills")}
            >
              {t('nav.tecnologias')}
            </a>
            <a
              href="#contact"
              className="nav-link"
              onClick={(e) => handleNavClick(e, "#contact")}
            >
              {t('nav.contactos')}
            </a>
          <div className="language-selector-wrapper">
            <LanguageSelector />
          </div>
        </Nav>


      </Navbar.Collapse>
    </Navbar>
  );
};

