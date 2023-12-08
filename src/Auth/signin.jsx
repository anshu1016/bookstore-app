// Import necessary dependencies and components
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signin } from '../redux/AuthSlice';
import { Link, useNavigate } from 'react-router-dom';

// Define the Signin component
const Signin = () => {
  // Set up Redux dispatch
  const dispatch = useDispatch();
const navigate = useNavigate();
  // Set up local state for form data
  const [formData, setFormData] = useState({ email: '', password: '' });

  // Event handler for input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Event handler for signin form submission
  const handleSignin = (e) => {
    e.preventDefault();

    // Dispatch the signin action and handle the promise
    dispatch(signin(formData))
      .unwrap()
      .then(() => {
        // Handle successful signin, e.g., redirect or update UI
        navigate("/books")
      })
      .catch((error) => {
        // Handle signin failure, e.g., display an error message
        console.error('Signin failed:', error);
      });
  };

  // Event handler for guest login button
 // Event handler for guest login button
const handleGuestLogin = () => {
    // Dispatch the signin action with guest credentials
    dispatch(signin({ email: 'testing@gmail.com', password: 'test' }))
      .unwrap()
      .then(() => {
        // Handle successful signin for guest, e.g., redirect or update UI
        navigate("/books")
          })
      .catch((error) => {
        // Handle signin failure, e.g., display an error message
        console.error('Guest login failed:', error);
      });
  };
  
  // Return the JSX for the Signin component
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Signin</div>
            <div className="card-body">
              <form onSubmit={handleSignin}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Signin
                </button>
                <button type="button" className="btn btn-secondary ms-2" onClick={handleGuestLogin}>
                  Login as Guest
                </button>
              </form>
            </div>
            <div className="card-footer">
              <p className="mb-0">
                Don't have an account? <Link to="/signup">Signup</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the Signin component
export default Signin;
