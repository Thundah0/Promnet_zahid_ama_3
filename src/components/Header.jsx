import { NavLink } from 'react-router-dom'

function Header({ logo = 'MY PROFILE', note = 'Personal Information' }) {
  return (
    <header className="site-header">
      <p className="logo">{logo}</p>
      <nav className="main-nav" aria-label="Navigasi utama">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <p className="header-note">{note}</p>
    </header>
  )
}

export default Header
