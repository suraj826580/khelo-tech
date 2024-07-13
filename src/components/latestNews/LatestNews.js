import React from "react";

const newsItems = [
  {
    image:
      "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Swasti Singh's gold powers Odisha past 50 medals",
    description:
      "Odisha won another medal on Wednesday at the 37th National Games in Goa thanks to the skill of Swasti Singh.",
  },
  {
    image:
      "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Swasti Singh's gold powers Odisha past 50 medals",
    description:
      "Odisha won another medal on Wednesday at the 37th National Games in Goa thanks to the skill of Swasti Singh.",
  },
  {
    image:
      "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Swasti Singh's gold powers Odisha past 50 medals",
    description:
      "Odisha won another medal on Wednesday at the 37th National Games in Goa thanks to the skill of Swasti Singh.",
  },
  {
    image:
      "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Swasti Singh's gold powers Odisha past 50 medals",
    description:
      "Odisha won another medal on Wednesday at the 37th National Games in Goa thanks to the skill of Swasti Singh.",
  },
  {
    image:
      "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Swasti Singh's gold powers Odisha past 50 medals",
    description:
      "Odisha won another medal on Wednesday at the 37th National Games in Goa thanks to the skill of Swasti Singh.",
  },
  {
    image:
      "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=600",
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
