import React from "react"
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import Banner from "../components/Index/Banner"
import Rooms from "../components/Index/Rooms"
import Location from "../components/Index/Location"

const IndexPage = () => {
  return (
    <Layout>
      <Navbar />
      <Banner />
      <Location />
      <Rooms />
    </Layout>
  )
}

export default IndexPage
