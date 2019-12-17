import { Link } from "gatsby"
import React from "react"
import Logo from "../svg/Logo.svg"
const Header = ({ siteTitle }) => {
  return (
    <header>
      <Link activeClassName="active" to="/">
        <Logo className="mainLogo" />
      </Link>

      <nav>
        <h1>
          <Link activeClassName="active" to="/">
            Main
          </Link>
        </h1>
        <h1>
          <Link activeClassName="active" to="/about">
            About
          </Link>
        </h1>
        <h1>
          <Link activeClassName="active" to="/contact">
            Contact
          </Link>
        </h1>
        <h1>
          <Link activeClassName="active" to="/gallery">
            Gallery
          </Link>
        </h1>
        <h1>
          <Link activeClassName="active" to="/pricing">
            Pricing
          </Link>
        </h1>
      </nav>
    </header>
  )
}

export default Header
