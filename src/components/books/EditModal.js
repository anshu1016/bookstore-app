// EditModal.js
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditModal = ({ show, handleClose, book, handleUpdate }) => {
  const [editedBook, setEditedBook] = useState({ ...book });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedBook((prevBook) => ({ ...prevBook, [name]: value }));
  };

  const handleUpdateClick = () => {
    handleUpdate(editedBook);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={editedBook.title}
              onChange={handleChange}
            />
          </Form.Group>
          {/* Add other form fields accordingly */}
          <Form.Group controlId="formTitle">
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              name="author"
              value={editedBook.author}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formTitle">
            <Form.Label>Genre</Form.Label>
            <Form.Control
              type="text"
              name="genre"
              value={editedBook.genre}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formTitle">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={editedBook.description}
              onChange={handleChange}
            />
          </Form.Group>
          {/* <Form.Group controlId="formTitle">
            <Form.Label>Cover Image</Form.Label>
            <Form.Control
              type="text"
              name="coverImage"
              value={editedBook.coverImage}
              onChange={handleChange}
            />
          </Form.Group> */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleUpdateClick}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;
