import { Container, Nav, Navbar } from 'react-bootstrap';
import home from "../assets/home.png"


export const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="contenedor-nav" data-bs-theme="dark">

            <Navbar.Brand href="/">

              <img id="home-nav-img" src={home}/>
            
            </Navbar.Brand> 

            <Navbar.Toggle className='boton-nav'/>

            <Navbar.Collapse id="navbar-collapse">

              <Nav id="links" className="ms-auto" >

                <Nav.Link href="#Sobre Mi">Sobre Mi</Nav.Link>
                <Nav.Link href="#Proyectos">Proyectos</Nav.Link>
                <Nav.Link href="#Contacto">Contacto</Nav.Link>

              </Nav>

            </Navbar.Collapse>
            
      </Navbar>
    </>
  )
}

