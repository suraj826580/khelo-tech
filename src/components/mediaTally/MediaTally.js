import React from "react";
import Skater from "../../assets/images/Skater.png";

const medalData = [
  {
    rank: 1,
    state: "Maharashtra",
    gold: 80,
    silver: 69,
    bronze: 79,
    total: 228,
  },
  {
    rank: 2,
    state: "Services Sports Control Board",
    gold: 66,
    silver: 27,
    bronze: 33,
    total: 126,
  },
  { rank: 3, state: "Haryana", gold: 66, silver: 55, bronze: 75, total: 192 },
  {
    rank: 4,
    state: "Madhya Pradesh",
    gold: 37,
    silver: 36,
    bronze: 39,
    total: 112,
  },
  { rank: 5, state: "Kerala", gold: 36, silver: 24, bronze: 27, total: 87 },
];

function MedalTally() {
  return (
    <div className="medal-tally-section">
      <div className="medal-tally-container">
        <div className="medal-tally-header">
          <span className="medal-icon">🏅</span>
          <h2>Medal Tally</h2>
        </div>
        <table className="medal-table">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>🥇</th>
              <th>🥈</th>
              <th>🥉</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {medalData.map((row) => (
              <tr key={row.rank}>
                <td>{row.rank}</td>
                <td>{row.state}</td>
                <td>{row.gold}</td>
                <td>{row.silver}</td>
                <td>{row.bronze}</td>
                <td>{row.total}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2">GRAND TOTAL</td>
              <td>555</td>
              <td>546</td>
              <td>779</td>
              <td>1880</td>
            </tr>
          </tfoot>
        </table>
        <div className="medal-tally-buttons">
          <button className="refresh-button">REFRESH</button>
          <button className="view-more-button">VIEW MORE</button>
        </div>
      </div>
      <div className="athlete-image">
        <img src={Skater} alt="Athlete in action" />
      </div>
    </div>
  );
}

export default MedalTally;
