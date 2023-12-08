// NewBookModal.js
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const NewBookModal = ({ show, handleClose, handleCreate }) => {
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    genre: '',
    description: '',
    coverImage: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook((prevBook) => ({ ...prevBook, [name]: value }));
  };

  const handleCreateClick = () => {
    handleCreate(newBook);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create New Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" name="title" value={newBook.title} onChange={handleChange} />
          </Form.Group>
          {/* Add other form fields accordingly */}
          <Form.Group controlId="formTitle">
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              name="author"
              value={newBook.author}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formTitle">
            <Form.Label>Genre</Form.Label>
            <Form.Control
              type="text"
              name="genre"
              value={newBook.genre}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formTitle">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={newBook.description}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formTitle">
            <Form.Label>Cover Image</Form.Label>
            <Form.Control
              type="text"
              name="coverImage"
              value={newBook.coverImage}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleCreateClick}>
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewBookModal;
