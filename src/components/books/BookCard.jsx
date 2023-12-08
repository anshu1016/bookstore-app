import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faTrash,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  fetchShoppingCart,
  removeFromCart,
} from "../../redux/CartSlice";
import EditModal from "./EditModal";

// ... (imports remain the same)

const BookCard = ({ book, onDelete, onEdit, handleUpdate }) => {
    const [showModal, setShowModal] = useState(false);
  
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const token = localStorage.getItem("token");
  
    useEffect(() => {
      dispatch(fetchShoppingCart(token));
    }, [dispatch, token]);
  
    const isInCart = cart.books?.some((item) => item.book._id === book._id);
  
    const handleEditClick = () => {
      onEdit(book._id);
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };
  
    const handleCartClick = async () => {
      try {
        if (isInCart) {
          // If book is already in the cart, remove it
          await dispatch(removeFromCart({ token, bookId: book?._id }));
        } else {
          // If book is not in the cart, add it
          await dispatch(addToCart({ token, bookId: book?._id, quantity: 1 }));
        }
  
        // After successfully adding/removing from the cart, refetch the cart
        dispatch(fetchShoppingCart(token));
      } catch (error) {
        console.error('Error updating cart:', error);
      }
    };
  
    return (
      <>
        <Card className="mb-4 book-card">
          <Card.Img variant="top" src={book.coverImage} alt={book.title} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>{book.description}</Card.Text>
  
            <div className="card-actions">
              <Link to={`/books/${book._id}`} className="btn btn-primary mr-2">
                View Details
              </Link>
              <Button variant="warning" onClick={handleEditClick}>
                <FontAwesomeIcon icon={faPencilAlt} /> Edit
              </Button>
              <Button variant="danger" onClick={() => onDelete(book._id)}>
                <FontAwesomeIcon icon={faTrash} /> Delete
              </Button>
              <Button
                variant={isInCart ? "success" : "outline-dark"}
                onClick={handleCartClick}
              >
                <FontAwesomeIcon icon={faShoppingCart} />{" "}
                {isInCart ? "Added to Cart" : "Add to Cart"}
              </Button>
            </div>
          </Card.Body>
        </Card>
  
        <EditModal
          show={showModal}
          handleClose={handleCloseModal}
          book={book}
          handleUpdate={handleUpdate}
        />
      </>
    );
  };
  
  export default BookCard;
  
