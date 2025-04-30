import React from "react";
import aboutData from "../../data/about.json";
import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";
import "../../styles/variables_et_mixins/variables_et_mixins.scss";
import "../../styles/components/Collapse/collapse_about.scss";
import imageAbout from "../../assets/Image_about.png";

const About = () => {
  return (
    <>
      <Banner title={null} image={imageAbout} />

      <div className="about-collapses">
        {aboutData.map((item) => (
          <Collapse key={item.id} title={item.title} content={item.content} />
        ))}
      </div>
    </>
  );
};

export default About;
