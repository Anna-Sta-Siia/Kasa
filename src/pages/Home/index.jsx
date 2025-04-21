import React from "react"
import Header from "../../components/Header"
import Banner from "../../components/Banner"
import CardList from "../../components/CardList"
import Footer from "../../components/Footer"

import "../../styles/pages/Home/home.scss"

const Home = () => {
  return (
    <>
      <Header />
      <main className="home">
        <Banner />
        <CardList />
      </main>
      <Footer />
    </>
  )
}

export default Home
