import { Container, Nav, Navbar, NavDropdown } from "solid-bootstrap";
import LinkWrapper from "~/linkwrapper";
import { setShowSideCart } from "./SideCart";

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkWrapper>
          <Navbar.Brand href="/">Solid Ecommerce</Navbar.Brand>
        </LinkWrapper>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav class="me-auto">
            <LinkWrapper>
              <Nav.Link href="/">Home</Nav.Link>
            </LinkWrapper>
            <LinkWrapper>
              <Nav.Link href="/about">About</Nav.Link>
            </LinkWrapper>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/something">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link onclick={() => setShowSideCart(true)}>Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
