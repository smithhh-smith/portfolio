import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav() {
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