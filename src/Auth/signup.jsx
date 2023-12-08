import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../redux/AuthSlice';
import {useNavigate} from "react-router-dom"
const Signup = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();  
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const resultAction = await dispatch(signup(formData));
      
      // Redirect to the protected route after successful signup
      navigate('/books');
    } catch (error) {
      // Handle signup failure
      console.error('Signup failed:', error);
    }
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Signup</div>
            <div className="card-body">
              <form onSubmit={handleSignup}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                  />
                </div>
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
                  Signup
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
