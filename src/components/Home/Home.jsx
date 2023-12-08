// HomePage.js
import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import { authors, books } from "../Authors/data";

const HomePage = () => {
  const featuredBook = books[0]; // Adjust logic based on your requirements

  return (
    <Container fluid>
      <Carousel className="theater-mode">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={featuredBook?.coverImage}
            alt={featuredBook?.title}
          />
          <Carousel.Caption>
            <h3>{featuredBook?.title}</h3>
            <p>{featuredBook?.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Add more Carousel.Items as needed */}
      </Carousel>

      <Row className="mt-4 justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>Welcome to Our Bookstore</Card.Title>
              <Card.Text>
                Explore a wide range of books and discover new authors. Find
                your next favorite book here!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4 justify-content-center">
        <Col md={8}>
          <h2>Popular Authors</h2>
          <Row>
            {authors.slice(0, 3).map((author) => (
              <Col key={author.id} md={4} className="mb-4">
                <Card>
                  <Card.Body>
                    <Card.Title>{author.name}</Card.Title>
                    <Card.Text>{author.bio}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
