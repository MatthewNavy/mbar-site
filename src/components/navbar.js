import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useLocation } from '@reach/router';

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "nav-link active" } : { className: "nav-link" }
}

const ExactNavLink = props => (
  <Link getProps={isActive} {...props} />
)

const Navbar = ({ siteTitle }) => {
  const location = useLocation();
  // const url = typeof window !== 'undefined' ? window.location.pathname : '';
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" href="#">{siteTitle}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-navbar"
                aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <ExactNavLink
                to="/"
              >
                Home
              </ExactNavLink>
            </li>
            <li className="nav-item">
              <ExactNavLink
                to="/resume"
              >
                Resume
              </ExactNavLink>
            </li>
            <li className="nav-item dropdown">
              <a className={ location.pathname.includes("poetry") ? "nav-link dropdown-toggle active" : "nav-link dropdown-toggle" } href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Poetry
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><Link className="dropdown-item" to="/poetry/uwh">The Uncharted Way Home</Link></li>
                <li><Link className="dropdown-item" to="/poetry/siena">Siena, Italy</Link></li>
                <li><Link className="dropdown-item" to="/poetry/ornament">Ornament</Link></li>
                <li><Link className="dropdown-item" to="/poetry/crush">My Cougar Crush</Link></li>
                <li><Link className="dropdown-item" to="/poetry/bedsheet">A hole in my bedsheet</Link></li>
                <li><Link className="dropdown-item" target="_blank" rel="noopener noreferrer" href="https://invented-form.herokuapp.com/">cardioid compass: an invented form</Link></li>
              </ul>
            </li>
            {/* <li className="nav-item">
              <ExactNavLink
                to="/books"
              >
                Book Recommendations
              </ExactNavLink>
            </li> */}
          </ul>
          <div className="align-text-bottom">
            <a
              href="https://etherscan.io/address/0x4fe4f54474fd3b1196bf865ae59021bf8b6eb1c9"
              className="text-reset"
              rel="noreferrer noopener"
              target="_blank"
              data-bs-toggle="tooltip"
              ata-bs-placement="top" 
              title="Ethereum address"
            >
                matthewbarton.eth
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
