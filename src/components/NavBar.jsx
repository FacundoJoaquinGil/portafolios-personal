import { Nav, Navbar } from "react-bootstrap";

export const NavBar = () => {
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar expand="lg" className="contenedor-nav" data-bs-theme="dark">
        <Navbar.Toggle className="boton-nav" />
        <Navbar.Collapse id="navbar-collapse" className="justify-content-center">
          <Nav id="links" className="mx-auto justify-content-center">
            <a href="#sobre-mi" className="nav-link" onClick={(e) => handleNavClick(e, '#sobre-mi')}>Sobre Mi</a>
            <a href="#proyectos" className="nav-link" onClick={(e) => handleNavClick(e, '#proyectos')}>Proyectos</a>
            <a href="#skills" className="nav-link" onClick={(e) => handleNavClick(e, '#skills')}>Skills</a>
            <a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, '#contact')}>Contactos</a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
