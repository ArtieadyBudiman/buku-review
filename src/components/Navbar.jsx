import {Navbar, Container} from 'react-bootstrap';

const NavbarComponent = () => {
   return(
      <>
      <Navbar className="shadow-sm sticky-top" bg="light">
         <Container>
            <Navbar.Brand href="/">
               <span className="text-primary fw-bold">Buku</span>Review
            </Navbar.Brand>
         </Container>
      </Navbar>
      </>
   )
}

export default NavbarComponent;