import React, { useState } from "react";
import Navbar from "./component/Navbar/Navbar";
import Banner from "./component/Banner/Banner";
import RatingBanner from "./component/Banner/RatingBanner";
import Banner3 from "./component/Banner/Banner3";
import Tab from "./component/Tab/Tab";
import MidContainer from "./component/Tab/Mid/MidContainer";
import Midlast from "./component/MidLast/Midlast";
import FooterFirst from "./component/Footer/FooterFirst";
import FooterLast from "./component/Footer/FooterLast";

const A1 = () => {
  const [info, setI] = useState([]);

  return (
    <div>
      <Navbar info={info}></Navbar>
      <Banner></Banner>
      <RatingBanner></RatingBanner>
      <Banner3></Banner3>
      <Tab info={info} setI={setI}></Tab>
      <MidContainer></MidContainer>
      <Midlast></Midlast>
      <FooterFirst></FooterFirst>
      <FooterLast></FooterLast>
    </div>
  );
};

export default A1;
