import React from 'react';
import Link from 'next/link';

import { Collapse, Navbar, NavbarToggler,
  NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const ReactBsLink = ({route, title}) => (
  <Link href={route}>
    <a style={{'fontSize': '20px', 'paddingRight': '10px'}}> {title} </a>
  </Link>
);

class Header extends React.Component {
  
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Learn Next</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <ReactBsLink route="/" title="Home" />
              </NavItem>
              <NavItem>
                <ReactBsLink route="/about" title="About" />
              </NavItem>
              <NavItem>
                <ReactBsLink route="/blogs" title="Blogs" />
              </NavItem>
              <NavItem>
                <ReactBsLink route="/cv" title="CV" />
              </NavItem>
              <NavItem>
                <ReactBsLink route="/portfolios" title="Portfolios" />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Header;