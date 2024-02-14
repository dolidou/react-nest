import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
import About from './About';
import Home from './Home';
import ClientManagement from './client/ClientManagement';
import FournisseurManagement from './fournisseur/FournisseurManagement';
import LoginManagement from './auth/LoginManagement';
import Logout from './auth/logout';
import RegisterManagement from './auth/RegisterManagement';

class NavbarComp extends Component {
  // Déplacez la déclaration en dehors de la méthode render
  LoginManagementWithRouter = withRouter(LoginManagement);
  RegisterManagementWithRouter = withRouter(RegisterManagement);

  handleLogout = () => {
    // Ajoutez ici la logique de déconnexion, par exemple, nettoyez le localStorage
    localStorage.removeItem('token');
  };

  render() {
    return (
      <Router>
        <div>
          {localStorage.getItem('token') ? (
            // Si l'utilisateur est connecté
            <Navbar expand="lg" className="bg-primary">
              <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link as={Link} to="/home">
                      Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/about">
                      About
                    </Nav.Link>
                    <Nav.Link as={Link} to="/ClientManagement">
                      Client
                    </Nav.Link>
                    <NavDropdown title="Référentiel" id="basic-nav-dropdown">
                      <NavDropdown.Item as={Link} to="/ClientManagement">
                        Client
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/FournisseurManagement">
                        Fournisseur
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link onClick={this.handleLogout} as={Link} to="/login">
                      Logout
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          ) :null}
          <div>
            <Switch>
            <Route path="/register">
                <this.RegisterManagementWithRouter />
              </Route>
              <Route path="/login">
                {/* Utilisez la déclaration de LoginManagementWithRouter ici */}
                <this.LoginManagementWithRouter />
              </Route>
            <Route path="/login">
                {/* Utilisez la déclaration de LoginManagementWithRouter ici */}
                <this.LoginManagementWithRouter />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/ClientManagement">
                <ClientManagement />
              </Route>
              <Route path="/FournisseurManagement">
                <FournisseurManagement />
              </Route>
              <Route path="/logout">
                <Logout /> {/* Ajoutez cette route pour le composant Logout */}
              </Route>
          
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default NavbarComp;
