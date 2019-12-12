import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ imageName }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "images" } }) {
        edges {
          node {
            name
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
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
    <Img
      fluid={currentImage[0].node.childImageSharp.fluid}
      style={{ width: "200px" }}
    />
  )
}

export default Image
