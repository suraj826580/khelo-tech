import React from "react";

const scheduleData = [
  {
    time: "08:30:00",
    sports: "Golf",
    events: "Men's Individual",
    round: "Round 3",
    venue: "Indira Gandhi International Sports Stadium",
  },
  {
    time: "09:15:00",
    sports: "Football",
    events: "Men's Team",
    round: "League",
    venue: "Haldwani Sports Stadium",
  },
  {
    time: "10:30:00",
    sports: "Judo",
    events: "Women's 48kg",
    round: "Elimination",
    venue: "Indira Gandhi International Sports Stadium",
  },
  {
    time: "07:00:00",
    sports: "Golf",
    events: "Women's 48kg",
    round: "Elimination",
    venue: "Haldwani Sports Stadium",
  },
  {
    time: "10:30:00",
    sports: "Judo",
    events: "Women's 48kg",
    round: "Elimination",
    venue: "Indira Gandhi International Sports Stadium",
  },
  {
    time: "10:30:00",
    sports: "Judo",
    events: "Women's 48kg",
    round: "Elimination",
    venue: "Indira Gandhi International Sports Stadium",
  },
];

function Schedule() {
  return (
    <div className="schedule-section">
      <div>
        <h2>SCHEDULE</h2>
        <div className="schedule-filters">
          <select className="date-select">
            <option>Select Date</option>
          </select>
          <select className="game-select">
            <option>All Games</option>
          </select>
        </div>
      </div>
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Sports</th>
            <th>Events</th>
            <th>Round/Pool</th>
            <th>Venue</th>
          </tr>
        </thead>
        <tbody>
          {scheduleData.map((item, index) => (
            <tr key={index}>
              <td>
                <div className="sport-icon"></div>
                {item.time}
              </td>
              <td>{item.sports}</td>
              <td>{item.events}</td>
              <td>{item.round}</td>
              <td>{item.venue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Schedule;
