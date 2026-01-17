import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import gsap from 'gsap';
import './Nav.css';

function Nav() {
  useEffect(() => {
    gsap.set('.name-role', { opacity: 0, x: -50 });
    gsap.set('.nav-link', { opacity: 0, y: -20 });

    const tl = gsap.timeline();

    tl.to('.name-role', {
      opacity: 1,
      x: 0,
      duration: 1.2,
      ease: 'power2.out'
    }, 0);

    tl.to('.nav-link', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out'
    }, 0.3);
  }, []);

  const links = [
    { to: '/about-me', label: 'About me' },
    { to: '/resume', label: 'Resume' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' }
  ];

  const renderLinks = () => (
    <div className="nav-links-div">
      {links.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
        >
          {label}
        </NavLink>
      ))}
    </div>
  );

  return (
    <>
      <nav role="navigation" aria-label="Primary navigation">
        <div>
          <div className="name-role">
            <i className="fa-solid fa-star" aria-hidden="true"></i> <span>Phoebe</span>
          </div>
        </div>

        {renderLinks()}
      </nav>

      <div className="sm-nav">
        {renderLinks()}
      </div>
    </>
  );
}

export default Nav;