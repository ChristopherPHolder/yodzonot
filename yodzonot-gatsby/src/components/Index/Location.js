import React from "react"
import { Link } from "gatsby"

import "../../assets/css/location.css"
import LocationSlider from "./Sliders/LocationSlider"


const Location = () => {

    return (
        <div className='it-services-banner' >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="main-banner-content">
                            <h1> Acommodations </h1>
                            <p>
                                The Hacienda Yodzonot is located 30min from the Merida,
                                is 1km from the highway. It's been restored in acordance
                                to traditional Yucatecan Arquetecture, additionally it
                                has a private cenote and a tower. It's large open space 
                                make it a perfect place for events, as well as a private
                                ascape from the city with a fully furinished house with
                                5 bedrooms.
                            </p>
                            
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
                            <LocationSlider />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Location