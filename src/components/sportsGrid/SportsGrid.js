import React from "react";
import Archery_Pose from "../../assets/images/Archery_Pose.png";
import ArcheryBg from "../../assets/images/archeryBG.png";
const SportsGrid = () => {
  const sports = [
    { image: Archery_Pose, background: ArcheryBg },
    { image: Archery_Pose, background: ArcheryBg },
    { image: Archery_Pose, background: ArcheryBg },
    { image: Archery_Pose, background: ArcheryBg },
    { image: Archery_Pose, background: ArcheryBg },
    { image: Archery_Pose, background: ArcheryBg },
    { image: Archery_Pose, background: ArcheryBg },
    { image: Archery_Pose, background: ArcheryBg },
    { image: Archery_Pose, background: ArcheryBg },
    { image: Archery_Pose, background: ArcheryBg },
    { image: Archery_Pose, background: ArcheryBg },
    { image: Archery_Pose, background: ArcheryBg },
  ];

  return (
    <div className="sports-grid-container">
      <div className="sports-header">
        <h2>SPORTS</h2>
        <button className="view-more-btn">VIEW MORE</button>
      </div>
      <div className="sports-grid">
        {sports.map((sport, index) => (
          <div
            key={index}
            className="sport-card"
            style={{ backgroundImage: `url(${sport.background})` }}>
            <img src={sport.image} alt={sport.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportsGrid;
