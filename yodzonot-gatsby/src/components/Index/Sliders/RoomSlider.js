import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import { Carousel } from "react-bootstrap"

import 'bootstrap/dist/css/bootstrap.min.css';

const RoomSlider = () => (
    <StaticQuery 
        query={graphql`
            query {
                slideShow: allFile(
                    filter: {
                        relativeDirectory: {
                            eq: "carousel"
                        }
                    }
                ) {
                    edges {
                        node {
                            id
                            relativePath
                            base
                            childImageSharp {
                                gatsbyImageData(
                                    height: 600
                                    width: 900
                                    placeholder: BLURRED
                                    quality: 70
                                    blurredOptions: {width: 100}
                                )
                            }
                        }
                    }
                }
            }
        `}

        render={data => (
            <Carousel>
                {data.slideShow.edges.map(({node}) => (
                    <Carousel.Item key={node.id}>
                        <GatsbyImage image={node.childImageSharp.gatsbyImageData} alt={node.base} />
                    </Carousel.Item>
                ))}
            </Carousel> 
        )}
        />
)

export default RoomSlider;