import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AchievementsInternational from "../components/AchievementsInternational";

const International = () => {
  return (
    <div>
      <Navbar />
      <Banner
        mainText="Our Achievements"
        subTexts="Exceptional milestones, transformative projects, and outstanding contributions! Proudly showcasing our remarkable successes and advancements!"
      />

      <div className=" min-h-screen  p-6">
        <AchievementsInternational />
      </div>
      <Footer />
    </div>
  );
};

export default International;
