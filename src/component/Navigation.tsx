import { useState, useEffect } from 'react';

import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";

export const navLinks = [
  {
    id: 1,
    path: "",
    text: "Work",
  },
  {
    id: 2,
    path: "about",
    text: "About",
  },
  {
    id:4,
    path: "produk",
    text: "Product",
  },
  {
    id: 3,
    path: "contact",
    text: "Contact",
  },
];


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
        {navLinks.map((nav) => (
          <div className="nav-link" key={nav.id}>
            <NavLink to={nav.path} className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }>{nav.text}</NavLink>
          </div>
        ))}
      </Nav>
    </div>
  );
}

export default Navigation;
