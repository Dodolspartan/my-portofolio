import Nav from 'react-bootstrap/Nav';
import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className='Navigation'>
      <Nav className="justify-content-center nav" as="ul">
        {navLinks.map((link) => (
          <div className="nav-link" key={link.id}>
            <NavLink to={link.path} className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }>{link.text}</NavLink>
          </div>
        ))}
      </Nav>
    </div>
  );
}

export default Navigation;
