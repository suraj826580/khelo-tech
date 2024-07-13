import React from "react";
import CustomNavbar from "../navbar/CustomNavbar";
import mainBg from "../../assets/images/mainBg.png";
import CountdownBanner from "../countdownBanner/CountdownBanner";
import ContentSection from "../contentSection/contentSection";

function Hero() {
  const heroStyle = {
    backgroundImage: `url(${mainBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "100%",
  };

  return (
    <div style={heroStyle}>
      <CustomNavbar />
      <CountdownBanner />
      <ContentSection />
    </div>
  );
}

export default Hero;
