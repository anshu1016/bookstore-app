import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { authors } from '../../data/data';
console.log(authors,"AUTHORSS")
const AuthorsList = ({ authors }) => {
  return (
    <Container className="mt-4">
      <Row>
        {Object.entries(authors).map((author, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top"/>
              <Card.Body>
                <Card.Title>{author.name}</Card.Title>
                <Card.Text>Popularity: {author.popularity}</Card.Text>
                <Card.Text>Genres: {author.genres.join(', ')}</Card.Text>
                <Card.Text>Books:</Card.Text>
                <ul>
                  {author.books.map((book, bookIndex) => (
                    <li key={bookIndex}>
                      <strong>{book.title}</strong> - {book.genre}
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AuthorsList;
