import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const ImageGallery = ({ heading, images, columnSizes }) => {
  return (
    <Container className="partners-container">
      <h2 className="partners-title">{heading}</h2>
      <Row className="partners-row">
        {images.map((image, index) => (
          <Col
            key={index}
            xs={columnSizes.xs}
            md={columnSizes.md}
            className="partner-col">
            <Image src={image.src} alt={image.alt} fluid />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ImageGallery;
