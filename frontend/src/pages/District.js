import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AchievementsDistrict from "../components/AchievementsDistrict";

const District = () => {
  return (
    <div>
      <Navbar />
      <Banner
        mainText="Our Achievements"
        subTexts="Exceptional milestones, transformative projects, and outstanding contributions! Proudly showcasing our remarkable successes and advancements!"
      />

      <div className=" min-h-screen  p-6">
        <AchievementsDistrict />
      </div>
      <Footer />
    </div>
  );
};

export default District;
