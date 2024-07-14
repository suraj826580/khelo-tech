import React from "react";
import Gallery_1 from "../../assets/images/Gallery_1.svg";
import Gallery_2 from "../../assets/images/Gallery_2.svg";
import Gallery_3 from "../../assets/images/Gallery_3.svg";
import Gallery_4 from "../../assets/images/Gallery_4.svg";

const PhotoGallery = () => {
  const images = [
    {
      src: Gallery_1,
      alt: "Image 1 description",
      title: "Swasti Singh's gold powers Odisha past 50 medals",
    },
    {
      src: Gallery_2,
      alt: "Image 2 description",
      title: "Swasti Singh's gold powers Odisha past 50 medals",
    },
    {
      src: Gallery_3,
      alt: "Image 3 description",
      title: "Swasti Singh's gold powers Odisha past 50 medals",
    },
    {
      src: Gallery_4,
      alt: "Image 4 description",
      title: "Swasti Singh's gold powers Odisha past 50 medals",
    },
  ];

  return (
    <div className="photo-gallery">
      <div className="gallery-header">
        <h2 className="gallery-title">PHOTO GALLERY</h2>
        <div className="gallery-controls">
          <span className="control active"></span>
          <span className="control"></span>
        </div>
      </div>
      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index} className="image-container">
            <img src={image.src} alt={image.alt} />
            <p className="image-title">{image.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
