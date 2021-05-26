import React from 'react';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import '../style/boosted.min.css';

/**
 * Component ...
 */
class Header extends React.Component {

  
  render(){

    return <div>

              <Navbar style={{'position': 'fixed', 'width':'100%'}} collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="/">Homepage- Generate new public view</Nav.Link>
                    <Nav.Link href="/welcomeInstance">My Running Instances</Nav.Link>
                  </Nav>

                  <Nav >
                  <NavDropdown title="Constraints Legend" id="collasible-nav-dropdown">
                      <NavDropdown.Item style={{"fontSize":'16px'}}>Post-execution</NavDropdown.Item>
                      <NavDropdown.Item style={{color:"#29A81A", "fontSize":'12px'}}> -- Include</NavDropdown.Item>
                      <NavDropdown.Item style={{color:"#FF0000", "fontSize":'12px'}}> -- Exclude</NavDropdown.Item>
                      <NavDropdown.Item style={{color:"#1E90FF", "fontSize":'12px'}}> -- Response</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item style={{"fontSize":'16px'}}>Pre-execution</NavDropdown.Item>
                      <NavDropdown.Item style={{color:"#FFA500", "fontSize":'12px'}}> -- Condition</NavDropdown.Item>
                      <NavDropdown.Item style={{color:"#BC1AF2", "fontSize":'12px'}}> -- Milestone</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>

          </div>
;
  }
}

export default Header

