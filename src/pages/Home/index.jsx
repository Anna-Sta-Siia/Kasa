import React from "react";
import Banner from "../../components/Banner";
import CardList from "../../components/CardList";
import "../../styles/variables_et_mixins/variables_et_mixins.scss";
import imageHome from "../../assets/Image_home.png";

const Home = () => {
  return (
    <>
      <Banner title={<>Chez vous, partout et ailleurs</>} image={imageHome} />
      <CardList />
    </>
  );
};

export default Home;
