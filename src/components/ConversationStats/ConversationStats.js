// import React from "react";
import cricketer from "../../assets/images/crickter.png";
// const ConversationStats = () => {
//   return (
//     <div className="conversation-container">
//       <div className="stats-section">
//         <h2>Join the</h2>
//         <h1>CONVERSATION</h1>
//         <p>#UTTARAKHANDGAMES2024</p>

//         <div className="stats-grid">
//           <div className="stat-item">
//             <h3>ALL TOGETHER</h3>
//             <div className="stat-value">28</div>
//             <div className="stat-label">STATES</div>
//           </div>
//           <div className="stat-item">
//             <h3>COLLECTIVELY</h3>
//             <div className="stat-value">8 + 1</div>
//             <div className="stat-label">UNION TERRITORIES & CONTROL BOARDS</div>
//           </div>
//           <div className="stat-item">
//             <h3>WE ARE UNIFIED</h3>
//             <div className="stat-value">8000+</div>
//             <div className="stat-label">ATHLETES</div>
//           </div>
//           <div className="stat-item">
//             <h3>COMPETITION</h3>
//             <div className="stat-value">22</div>
//             <div className="stat-label">DAYS</div>
//           </div>
//           <div className="stat-item">
//             <h3>SERVICE</h3>
//             <div className="stat-value">4000</div>
//             <div className="stat-label">VOLUNTEERS</div>
//           </div>
//         </div>
//       </div>
//       <div className="image-section">
//         <img src={cricketer} alt="Cricketer in action" />
//       </div>
//     </div>
//   );
// };

// export default ConversationStats;

import React from "react";

const ConversationStats = () => {
  return (
    <div className="conversation-container">
      <div className="stats-section">
        <h2>Join the</h2>
        <h1>CONVERSATION</h1>
        <p>#UTTARAKHANDGAMES2024</p>

        <div className="stats-grid">
          <div className="stat-item">
            <h3>ALL TOGETHER</h3>
            <div className="stat-value">28</div>
            <div className="stat-label">STATES</div>
          </div>
          <div className="stat-item">
            <h3>COLLECTIVELY</h3>
            <div className="stat-value">8 + 1</div>
            <div className="stat-label">UNION TERRITORIES & CONTROL BOARDS</div>
          </div>
          <div className="stat-item">
            <h3>WE ARE UNIFIED</h3>
            <div className="stat-value">8000+</div>
            <div className="stat-label">ATHLETES</div>
          </div>
          <div className="stat-item">
            <h3>COMPETITION</h3>
            <div className="stat-value">22</div>
            <div className="stat-label">DAYS</div>
          </div>
          <div className="stat-item">
            <h3>SERVICE</h3>
            <div className="stat-value">4000</div>
            <div className="stat-label">VOLUNTEERS</div>
          </div>
        </div>
      </div>
      <div className="image-section">
        <img src={cricketer} alt="Cricketer in action" />
      </div>
    </div>
  );
};

export default ConversationStats;
