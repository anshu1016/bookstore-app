// ListPage.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllBooks, deleteBookById, updateExistingBook, createNewBook } from '../../redux/BookSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import BookCard from './BookCard';
import NewBookModal from './NewModal';  // Assuming you have a NewBookModal component

const ListPage = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(fetchAllBooks(token));
  }, [dispatch]);

  const handleDelete = (bookId) => {
    dispatch(deleteBookById({ token, bookId }));
  };

  const handleEdit = (bookId) => {
    console.log(`Editing book with ID: ${bookId}`);
    // Handle the edit logic as needed
  };

  const handleUpdate = (editedBook) => {
    dispatch(updateExistingBook({ token, bookId: editedBook._id, bookData: editedBook }));
  };

  // New book modal state and functions
  const [showNewBookModal, setShowNewBookModal] = useState(false);

  const handleShowNewBookModal = () => {
    setShowNewBookModal(true);
  };

  const handleCloseNewBookModal = () => {
    setShowNewBookModal(false);
  };

  const handleCreateNewBook = (newBook) => {
    dispatch(createNewBook({ token, bookData: newBook }));
    handleCloseNewBookModal();  // Close the modal after creating a new book
  };

  return (
    <div>
      <h2 className="mb-4">Book List</h2>

        <div class="alert alert-warning" role="alert">
    <p class="bg-white mb-0">
        PLEASE FILL THE AUTHOR USING THIS FORMAT OF ID ("65769051157c21e9177be488"),
        OTHERWISE IT WILL GIVE ERROR. I HAVE INITIALIZED THIS FIELD IN API USING
        OBJECT TYPE SCHEMA ID THAT'S WHY IT'S NECESSARY TO USE SUCH TYPES OF AUTHOR ID
    </p>
</div>

      
      <div className="float-button" onClick={handleShowNewBookModal} style={{ position: 'fixed', top: '10px', right: '10px',cursor: 'pointer', fontSize: '40px', color: 'red'  }}>
        <FontAwesomeIcon icon={faPlus} style={{ cursor: 'pointer', fontSize: '40px', color: 'red' }} />Add
      </div>

      

      
      <div className="row">
        {books.map((book) => (
          <div key={book._id} className="col-md-4 mb-4">
            <BookCard book={book} onDelete={handleDelete} onEdit={handleEdit} handleUpdate={handleUpdate} />
          </div>
        ))}
      </div>

      {/* Floating "+" icon at the bottom right corner */}
      <div className="float-button" onClick={handleShowNewBookModal} style={{ cursor: 'pointer', fontSize: '40px', color: 'red' }} >
        <FontAwesomeIcon icon={faPlus} style={{ cursor: 'pointer', fontSize: '40px', color: 'red' }} />Add
      </div>
   

      {/* New book modal */}
      <NewBookModal show={showNewBookModal} handleClose={handleCloseNewBookModal} handleCreate={handleCreateNewBook} />
    </div>
  );
};

export default ListPage;
