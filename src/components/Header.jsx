function Header({ logo = 'MY PROFILE', note = 'Personal Information' }) {
  return (
    <header className="site-header">
      <p className="logo">{logo}</p>
      <p className="header-note">{note}</p>
    </header>
  )
}

export default Header
