import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Gallery_1 from "../../assets/images/Galler_1.png";

const PhotoGallery = () => {
  const images = [
    { src: Gallery_1, alt: "Image 1 description" },
    { src: Gallery_1, alt: "Image 2 description" },
    { src: Gallery_1, alt: "Image 3 description" },
    { src: Gallery_1, alt: "Image 4 description" },
  ];

  return (
    <Container fluid className="photo-gallery">
      <Row className="align-items-center mb-3">
        <Col>
          <h2 className="gallery-title">PHOTO GALLERY</h2>
        </Col>
        <Col xs="auto">
          <div className="gallery-controls">
            <span className="control active"></span>
            <span className="control"></span>
          </div>
        </Col>
      </Row>
      <Row className="grid">
        {images.map((image, index) => (
          <Col key={index} xs={12} className="image-container">
            <Image src={image.src} alt={image.alt} fluid />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PhotoGallery;
