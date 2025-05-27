
import { Nav, Navbar } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export const NavBar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

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
              Sobre Mi
            </a>
            <a
              href="#proyectos"
              className="nav-link"
              onClick={(e) => handleNavClick(e, "#proyectos")}
            >
              Proyectos
            </a>
            <a
              href="#skills"
              className="nav-link"
              onClick={(e) => handleNavClick(e, "#skills")}
            >
              Skills
            </a>
            <a
              href="#contact"
              className="nav-link"
              onClick={(e) => handleNavClick(e, "#contact")}
            >
              Contactos
            </a>
        </Nav>

        <div className="idiomas-dropdown">
          <button className="dropdown-toggle-language">
            {t("language")} 🌐
          </button>
          <ul className="dropdown-menu-language">
            <li>
              <button onClick={() => changeLanguage("es")}>
                🇪🇸 Español
              </button>
            </li>
            <li>
              <button onClick={() => changeLanguage("en")}>
                🇺🇸 English
              </button>
            </li>
          </ul>
        </div>

      </Navbar.Collapse>
    </Navbar>
  );
};
