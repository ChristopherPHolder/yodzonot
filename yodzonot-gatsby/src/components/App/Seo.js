import React from 'react'
import { Helmet } from "react-helmet"

const Seo = () => {
    return (
        <div>
            <Helmet>
                <title>Deep Blue - Custom software to speed up your business</title>
                <meta name="description" content="Deep Blue - Custom software to speed up your business" />
                <meta name="og:title" property="og:title" content="Deep Blue - Custom software to speed up your business"></meta>
                <meta name="twitter:card" content="Deep Blue - Custom software to speed up your business"></meta>
            </Helmet>
        </div>
    )
}

export default Seo