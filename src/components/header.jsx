import { Link } from "gatsby"
import React from "react"
import Image from "./image"

const Header = ({ siteTitle }) => (
  <header>
    <Link activeClassName="active" to="/">
      <Image imageName={"main"} style={{ width: "170px" }}></Image>
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

export default Header
