import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ imageName, style }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "images" } }) {
        edges {
          node {
            name
            childImageSharp {
              fluid(maxWidth: 3000) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `)
  const [currentImage] = useState(
    data.allFile.edges.filter(item => item.node.name === imageName)
  )

  return (
    <Img fluid={currentImage[0].node.childImageSharp.fluid} style={style} />
  )
}

export default Image
