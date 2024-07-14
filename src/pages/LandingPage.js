import React from "react";
import Hero from "../components/Hero/Hero";
import LatestNews from "../components/latestNews/LatestNews";
import MedalTally from "../components/mediaTally/MediaTally";
import Schedule from "../components/schedule/Schedule";
import MascotSection from "../components/mascotSection/MascotSection";
import ConversationStats from "../components/ConversationStats/ConversationStats";
import SportsGrid from "../components/sportsGrid/SportsGrid";
import FollowUs from "../components/FollowUs/FollowUs";
import CompetitionZone from "../components/CompetitionZone/CompetitionZone";
import PhotoGallery from "../components/PhotoGallery/PhotoGallery";
import Partners from "../components/partners/Partners";
import NumberBanner from "../components/NumbersBanner/NumberBanner";
import { Container } from "react-bootstrap";
import {
  Footer,
  Header,
  Navigation,
  Sports,
  UkgocInfo,
} from "../components/Footer/Footer";

function LandingPage() {
  return (
    <>
      <Hero />
      <LatestNews />
      <MedalTally />
      <Schedule />
      <MascotSection />
      <ConversationStats />
      <SportsGrid />
      <FollowUs />
      <CompetitionZone />
      <PhotoGallery />
      <Partners />
      <NumberBanner />
      <Container fluid className="main-container">
        <Header />
        <Navigation />
        <Sports />
        <UkgocInfo />
        <Footer />
      </Container>
    </>
  );
}

export default LandingPage;
