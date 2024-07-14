import React from "react";
import LatestNews_1 from "../../assets/images/LatestNews_1.svg";
import LatestNews_2 from "../../assets/images/LatestNews_2.svg";
import LatestNews_3 from "../../assets/images/LatestNews_3.svg";
import LatestNews_4 from "../../assets/images/LatestNews_4.svg";
import LatestNews_5 from "../../assets/images/LatestNews_5.svg";
import LatestNews_6 from "../../assets/images/LatestNews_6.svg";

const newsItems = [
  {
    image: LatestNews_1,
    title: "Swasti Singh's gold powers Odisha past 50 medals",
    description:
      "Odisha won another medal on Wednesday at the 37th National Games in Goa thanks to the skill of Swasti Singh.",
  },
  {
    image: LatestNews_2,
    title: "Swasti Singh's gold powers Odisha past 50 medals",
    description:
      "Odisha won another medal on Wednesday at the 37th National Games in Goa thanks to the skill of Swasti Singh.",
  },
  {
    image: LatestNews_3,
    title: "Swasti Singh's gold powers Odisha past 50 medals",
    description:
      "Odisha won another medal on Wednesday at the 37th National Games in Goa thanks to the skill of Swasti Singh.",
  },
  {
    image: LatestNews_4,
    title: "Swasti Singh's gold powers Odisha past 50 medals",
    description:
      "Odisha won another medal on Wednesday at the 37th National Games in Goa thanks to the skill of Swasti Singh.",
  },
  {
    image: LatestNews_5,
    title: "Swasti Singh's gold powers Odisha past 50 medals",
    description:
      "Odisha won another medal on Wednesday at the 37th National Games in Goa thanks to the skill of Swasti Singh.",
  },
  {
    image: LatestNews_6,
    title: "Swasti Singh's gold powers Odisha past 50 medals",
    description:
      "Odisha won another medal on Wednesday at the 37th National Games in Goa thanks to the skill of Swasti Singh.",
  },
];

function LatestNews() {
  return (
    <div className="latest-news-section">
      <h2>LATEST NEWS</h2>
      <div className="news-grid">
        {newsItems.map((item, index) => (
          <div key={index} className="news-item">
            <img src={item.image} alt={item.title} />
            <div className="news-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestNews;
