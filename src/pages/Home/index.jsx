import React from "react"
import Header from "../../components/Header"
import Banner from "../../components/Banner"
import CardList from "../../components/CardList"
import Footer from "../../components/Footer"
import "../../styles/variables_et_mixins/variables_et_mixins.scss"

const Home = () => {
  return (
    <>
   <main className="page">
      <Header />
        <Banner />
        <CardList />
        </main>
      <Footer />
      
    </>
  )
}

export default Home
