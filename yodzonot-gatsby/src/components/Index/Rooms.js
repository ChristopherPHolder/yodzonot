import React from "react"
import { Link } from "gatsby"

import "../../assets/css/location.css"
import BedroomSlider from "./Sliders/BedroomSlider"


const Rooms = () => {
    return (
        <div className='it-services-banner' >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="main-banner-content">
                            <h1> Our Bedrooms </h1>
                            <p> 
                                The house has five rooms, each with several posible sleeping arangements.
                                Each bedroom has its own bathroom and its unique style.
                            </p>
                            <ul>
                                <li> The White Room </li>
                                <li> The Grey Room </li>
                                <li> The Pink Room </li>
                                <li> The Blue Room </li>
                                <li> The Beige Room </li>
                            </ul>

                            <div className="btn-box">
                                <Link to="/acommodations" className="default-btn">
                                    <i className="flaticon-right"></i> 
                                    More pictures <span></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="main-banner-image">
                            <BedroomSlider />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Rooms