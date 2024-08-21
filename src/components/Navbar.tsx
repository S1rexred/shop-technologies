import { Navbar as NavbarBs, Container, Nav, Button } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export function Navbar() {
  return (
    <NavbarBs sticky='top' className="bg-white shadow-lg mb-3">
        <Container>
          <Nav>
            <Nav.Link as={NavLink} to='/'>Главная</Nav.Link>
            <Nav.Link as={NavLink} to='/store'>Магазин</Nav.Link>
            <Nav.Link as={NavLink} to="/about">О нас</Nav.Link>
          </Nav>
          <Button 
          style={{ position: 'relative', width: '3rem', height: '2.6rem'}} className="bg-dark">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
          </svg>
          <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{
            color: "white",
            width: "1.5rem",
            height: '1.5rem',
            position: 'absolute',
            bottom: '0',
            right: '0',
            top: '1.1rem',
            transform: 'translate(25%, 25%)'
            }}>
              3
            </div> 
          </Button>
        </Container>
        </NavbarBs>
  )
}
