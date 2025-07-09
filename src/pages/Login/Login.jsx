import React, { useState } from 'react';
import './Login.css';
import Logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [signSate, setSignState] = useState('Sign In');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent form reload

    if (signSate === 'Sign In') {
      if (email === 'demo@gmail.com' && password === '1234') {
        navigate('/');
      } else {
        setError('Invalid email or password');
      }
    } else {
      // Simple demo sign-up action
      if (name && email && password) {
        alert('Account created successfully (demo only)');
        setSignState('Sign In'); // Go back to sign-in screen
      } else {
        setError('Please fill all fields');
      }
    }
  };

  const switchToSignUp = () => {
    setSignState('Sign Up');
    setError('');
  };

  const switchToSignIn = () => {
    setSignState('Sign In');
    setError('');
  };

  return (
    <div className='login'>
      <img src={Logo} alt="Netflix Logo" className='login_logo' />
      <div className="login-form">
        <h1>{signSate}</h1>
        <form onSubmit={handleFormSubmit}>
          {signSate === 'Sign Up' && (
            <input
              type="text"
              placeholder='Your name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input
            type="email"
            placeholder='Email or phone number'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='login-button' type="submit">{signSate}</button>
        </form>

        {error && <p className='error-message'>{error}</p>}

        <div className='form-help'>
          <div className='remember-me'>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <span className='need-help'>Need help?</span>
        </div>

        <div className="login-info">
          {signSate === 'Sign In' ? (
            <p>New to Netflix? <span onClick={switchToSignUp}>Sign up now.</span></p>
          ) : (
            <p>Already have an account? <span onClick={switchToSignIn}>Sign In Now</span></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
