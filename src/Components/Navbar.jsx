const Navbar = ({ setCategory }) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-4">NewsApp</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory('business')}>
                business
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory('crime')}>
                crime
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory('domestic')}>
                domestic
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => setCategory('education')}
              >
                education
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory('food')}>
                food
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory('health')}>
                health
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => setCategory('lifestyle')}
              >
                lifestyle
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory('politics')}>
                politics
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory('science')}>
                science
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory('sports')}>
                sports
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => setCategory('technology')}
              >
                technology
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory('tourism')}>
                tourism
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory('world')}>
                world
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory('other')}>
                others
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
