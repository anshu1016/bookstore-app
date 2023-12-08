// CartItemCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/CartSlice';
import {useSelector} from "react-redux"
const CartItemCard = ({ item }) => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart({ token, bookId: item?.book?._id }));
  };

  return (
    <Card style={{ width: '18rem', marginBottom: '20px' }}>
      <Card.Img variant="top" src={item?.book?.coverImage} alt={item?.book?.title} />
      <Card.Body>
        <Card.Title>{item.book?.title}</Card.Title>
        <Card.Text>{item?.book?.description}</Card.Text>
        <Card.Text>Genre: {item?.book?.genre}</Card.Text>
        <Card.Text>Quantity: {item?.quantity}</Card.Text>
        <Button variant="danger" onClick={handleRemoveFromCart}>
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CartItemCard;
