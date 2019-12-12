import { Link } from "gatsby"
import React from "react"
import Image from "./image"

const Header = ({ siteTitle }) => (
  <header>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
    <Image imageName={"main"}></Image>
    <Image imageName={"gatsby-icon"}></Image>
    <Image imageName={"gatsby-astronaut"}></Image>
  </header>
)

export default Header
