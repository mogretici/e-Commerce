import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { useAuth } from "../Context/AuthContext";
import { CButton } from "@coreui/react";

function Navi() {
  const { loggedIn } = useAuth();
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>eCommerce</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <CButton color="dark"> Products </CButton>
              </LinkContainer>
            </Nav>
            <Nav>
              {loggedIn ? (
                <>
                  <LinkContainer to="/profile">
                    <CButton color="dark">Profile</CButton>
                  </LinkContainer>
                </>
              ) : (
                <>
                  <LinkContainer to="/signin">
                    <CButton color="dark"> Login </CButton>
                  </LinkContainer> 
                  <LinkContainer to="/signup">
                    <CButton color="dark"> Register </CButton>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navi;
