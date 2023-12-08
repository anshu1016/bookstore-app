import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSingleBook } from '../../redux/BookSlice';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';  // Import useHistory
// ... (other imports)

const SingleBookPage = () => {
  const { bookID } = useParams();
  const dispatch = useDispatch();
  const book = useSelector((state) => state.books.find((b) => b._id === bookID));
  const token = localStorage.getItem("token");
  const navigate = useNavigate();  // Use the useHistory hook

  useEffect(() => {
    // Fetch the single book when the component mounts
    dispatch(fetchSingleBook({ token, bookId: bookID }));
  }, [dispatch, bookID]);

  if (!book) {
    return <div>Loading...</div>;
  }

  const handleGoBack = () => {
    // Go back to the previous page
   navigate("/books")
  };

  return (
    <Container>
      <Row>
        <Col md={4}>
          <img src={book.coverImage} className="img-fluid" alt={book.title} />
        </Col>
        <Col md={8}>
          <h2>{book.title}</h2>
          <p>{book.description}</p>
          <p>Genre: {book.genre}</p>
          <p>Author: {book.author}</p>
          <Button variant="primary">Buy Now</Button>
          <Button variant="secondary" className="ml-2" onClick={handleGoBack}>
            Back
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleBookPage;
