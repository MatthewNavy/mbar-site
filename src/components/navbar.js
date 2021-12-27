import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "nav-link active" } : {className: "nav-link"}
}

const ExactNavLink = props => (
  <Link getProps={isActive} {...props} />
)

const A = props => (
  <div className="align-text-bottom">
  <a href="https://etherscan.io/address/0x4fe4f54474fd3b1196bf865ae59021bf8b6eb1c9"
  className="text-reset"
  rel="noreferrer noopener"
  target="_blank">matthewbarton.eth</a></div>
)

const Navbar = ({ siteTitle }) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
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
            <li className="nav-item">
              <ExactNavLink
                to="/poetry"
              >
                Poetry
              </ExactNavLink>
            </li>
            <li className="nav-item">
              <ExactNavLink
                to="/books"
              >
                Book Recommendations
              </ExactNavLink>
            </li>
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
