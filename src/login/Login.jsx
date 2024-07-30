import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const users = [
    {
      id: "u001",
      name: "Pasindu",
      projectResult: 80,
      paperResult: 95
    },
    {
      id: "u002",
      name: "Sachi",
      projectResult: 70,
      paperResult: 75
    },
    {
      id: "u003",
      name: "Dinu",
      projectResult: 80,
      paperResult: 75
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(u => u.id === username);
    if (user) {
      navigate(`/profile/${user.id}`, { state: { user } });
    } else {
      setError('Invalid User ID');
    }
  };

  return (
    <>
      <div className="row">
        <div className="">
          <h2 className="text-center text-dark mt-5">Login Form</h2>
          <div className="card my-5">
            <form className="card-body cardbody-color p-lg-6" onSubmit={handleSubmit}>
              <div className="text-center">
                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                  width="200px" alt="profile" />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="Username"
                  aria-describedby="emailHelp"
                  placeholder="User ID"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              {error && <div className="text-danger text-center mb-3">{error}</div>}
              <div className="text-center">
                <button type="submit" className="btn btn-color px-5 mb-5 w-100">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
