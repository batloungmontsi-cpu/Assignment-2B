function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Discover Lesotho home">
        <span className="brand-mark" aria-hidden="true">L</span>
        <span className="brand-copy"><strong>LESOTHO</strong><small>THE MOUNTAIN KINGDOM</small></span>
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#attractions">Discover</a>
        <a href="#about">Our story</a>
        <a className="nav-plan" href="#enquiry">Plan your visit <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  );
}

export default Header;