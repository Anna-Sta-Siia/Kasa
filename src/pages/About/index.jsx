import React from "react"
import aboutData from '../../data/about.json'
import Header from "../../components/Header"
import Banner from "../../components/Banner"
import Collapse from "../../components/Collapse"
import Footer from "../../components/Footer"
import "../../styles/variables_et_mixins/variables_et_mixins.scss"
import "../../styles/components/Collapse/collapse_about.scss"
import imageAbout from '../../assets/Image_about.png';


const About = () => {
  return (
    <>
   <main className="page">
      <Header />
      <Banner
  title={null}
  image={imageAbout}
/>

<div className="about-collapses">
          {aboutData.map((item, index) => (
            <Collapse key={index} title={item.title} content={item.content} />
          ))}
        </div>

        </main>
      <Footer />
    </>
  )
}

export default About
