// AuthorsPage.js
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, Card, Accordion, Button } from "react-bootstrap";
import { authors, books } from "./data";

const AuthorsPage = () => {
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  const handleAuthorClick = (authorId) => {
    setSelectedAuthor(authorId);
  };
const WRITER = authors.find((item)=>item.id===selectedAuthor)
  return (
    <Container>
      <h2>Authors</h2>
      <Row>
        {authors.map((author) => (
          <Col key={author.id} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{author.name}</Card.Title>
                <Card.Text>{author.bio}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleAuthorClick(author.id)}
                >
                  View Books
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {selectedAuthor && (
        <div className="mt-4">
           
          <h3>Books by {selectedAuthor}</h3>
          <Row>
            {books
              .filter((book) => book.authorId === WRITER.id)
              .map((book) => (
                <Col key={book.id} md={4} className="mb-4">
                  <Card>
                    <Card.Img
                      variant="top"
                      src={book.coverImage}
                      alt={book.title}
                    />
                    <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                      <Card.Text>{book.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </div>
      )}
    </Container>
  );
};

export default AuthorsPage;
