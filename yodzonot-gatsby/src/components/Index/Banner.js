import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import "../../assets/css/banner.css"

const Banner = () => {
    return (
        <section className="banner-container">
            <StaticImage
            as="div"
            className="banner-image"
            src="../../assets/images/background/main-house.webp"
            objectPosition="50% 50%"
            />

            <div className="banner-centered">
                <h1>
                    Text inside of banner
                </h1>
                <div className="btn-box banner-btn-box">
                    <Link to="/contact" className="default-btn">
                        <i className="flaticon-right"></i> 
                        Get Started <span></span>
                    </Link>
                </div>
            </div>
        </section>
    )
}
export default Banner