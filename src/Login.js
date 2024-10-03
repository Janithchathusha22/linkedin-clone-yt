import React, { useState } from 'react';
import './Login.css';
import loginImage from './assets/login.png'; 
import { useDispatch } from 'react-redux';
import { login } from './features/UserSlice';
import { auth } from './firebase'; 
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase'; 

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false); // Loading state
  const dispatch = useDispatch();

  // Handles the login process
  const loginToApp = async (e) => {
    e.preventDefault();

    setLoading(true); // Start loading
    try {
      const userAuth = await signInWithEmailAndPassword(auth, email, password);
      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          profileUrl: userAuth.user.photoURL, // Correct this line
        })
      );
      console.log("User logged in:", userAuth.user);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Handles the registration process
  const registerToApp = async (e) => {
    e.preventDefault();
    if (!name) {
      return alert('Please enter a full name!');
    }
    setLoading(true); // Start loading
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Update the user profile
      await updateProfile(userCredential.user, {
        displayName: name,
        photoURL: profilePic,
      });

      // Add user to Firestore
      await addDoc(collection(db, "users"), {
        name,
        email,
        profilePic,
        uid: userCredential.user.uid,
      });

      dispatch(
        login({
          email: userCredential.user.email,
          uid: userCredential.user.uid,
          displayName: name,
          photoURL: profilePic,
        })
      );
      console.log("User registered:", userCredential.user);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className='login-container'>
      <div className='login-box'>
        <img src={loginImage} alt='LinkedIn Login' className='login-image' />

        <h1 className='login-title'>{isLogin ? 'Sign In' : 'Sign Up'}</h1>
        <p className='login-subtitle'>
          {isLogin
            ? 'Stay updated on your professional world'
            : 'Join LinkedIn, the world’s largest professional network'}
        </p>

        <form className='login-form' onSubmit={isLogin ? loginToApp : registerToApp}>
          {!isLogin && (
            <>
              <input
                type='text'
                placeholder='Full name (required if registering)'
                className='login-input'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type='text'
                placeholder='Profile picture URL (optional)'
                className='login-input'
                value={profilePic}
                onChange={(e) => setProfilePic(e.target.value)}
              />
            </>
          )}
          <input
            type='email'
            placeholder='Email or phone'
            className='login-input'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type='password'
            placeholder='Password'
            className='login-input'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className='login-button' type='submit' disabled={loading}>
            {loading ? 'Loading...' : (isLogin ? 'Sign In' : 'Register')}
          </button>
        </form>

        {isLogin ? (
          <>
            <a href='#' className='forgot-password'>
              Forgot password?
            </a>
            <p className='new-account'>
              New to LinkedIn?{' '}
              <span onClick={() => setIsLogin(false)} className='join-now'>
                Join now
              </span>
            </p>
          </>
        ) : (
          <p className='new-account'>
            Already have an account?{' '}
            <span onClick={() => setIsLogin(true)} className='join-now'>
              Sign In
            </span>
          </p>
        )}
      </div>
    </div>
  );
}

export default Login;
