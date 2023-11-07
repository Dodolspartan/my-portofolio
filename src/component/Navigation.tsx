import { useState, useEffect } from 'react';

import Nav from 'react-bootstrap/Nav';
import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";

function Navigation() {

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <div className='Navigation'>
      <Nav className={`navbar ${isSticky ? 'sticky' : ''}`} as="ul">
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
