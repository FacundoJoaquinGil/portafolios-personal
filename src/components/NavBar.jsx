import { Container, Nav, Navbar } from 'react-bootstrap';
import home from "../assets/home2.png"



export const NavBar = () => {
  return (
    <>
    
      <Navbar expand="lg" className="contenedor-nav" data-bs-theme="dark">

            <Navbar.Brand href="/">

              <img id="home-nav-img" src={home} />
            
            </Navbar.Brand> 

            <Navbar.Toggle className='boton-nav' />

            <Navbar.Collapse id="navbar-collapse">

              <Nav id="links" className="ms-auto">

                <Nav.Link href="#navbar-sm">Sobre Mi</Nav.Link>
                <Nav.Link href="#navbar-card">Proyectos</Nav.Link>
                <Nav.Link href="#navbar-form">Contactos</Nav.Link>

              </Nav>

            </Navbar.Collapse>
            
      </Navbar>
    </>
  )
}

