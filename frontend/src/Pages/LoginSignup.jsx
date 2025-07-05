import React, { useState } from 'react';
import "./CSS/LoginSignup.css";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from 'mdb-react-ui-kit';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? 'login' : 'signup';
    const url = `http://localhost:4000/${endpoint}`;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        localStorage.setItem('auth-token', data.token);
        window.location.replace('/');
      } else {
        alert(data.errors || 'Something went wrong!');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardImage
              src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?semt=ais_hybrid"
              alt="login form"
              className="rounded-start w-100"
            />
          </MDBCol>

          <MDBCol md="6">
            <MDBCardBody className="d-flex flex-column">
              <div className="d-flex flex-row mt-2">
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                <span className="h1 fw-bold mb-0">Stylify</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>
                {isLogin ? 'Sign into your account' : 'Create your account'}
              </h5>

              {!isLogin && (
                <MDBInput
                  wrapperClass="mb-4"
                  label="Your Name"
                  id="username"
                  name="username"
                  type="text"
                  size="lg"
                  value={formData.username}
                  onChange={changeHandler}
                />
              )}

              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="email"
                name="email"
                type="email"
                size="lg"
                value={formData.email}
                onChange={changeHandler}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="password"
                name="password"
                type="password"
                size="lg"
                value={formData.password}
                onChange={changeHandler}
              />

              <MDBBtn className="mb-4 px-5" color="dark" size="lg" onClick={handleSubmit}>
                {isLogin ? 'Login' : 'Sign Up'}
              </MDBBtn>

              {isLogin ? (
                <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                  Don't have an account?{' '}
                  <a href="#!" onClick={() => setIsLogin(false)} style={{ color: '#393f81' }}>
                    Register here
                  </a>
                </p>
              ) : (
                <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                  Already have an account?{' '}
                  <a href="#!" onClick={() => setIsLogin(true)} style={{ color: '#393f81' }}>
                    Login here
                  </a>
                </p>
              )}

              <div className="d-flex flex-row justify-content-start">
                <a href="#!" className="small text-muted me-1">
                  Terms of use.
                </a>
                <a href="#!" className="small text-muted">
                  Privacy policy
                </a>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
};

export default LoginSignup;
