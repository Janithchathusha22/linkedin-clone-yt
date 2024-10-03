import React, { useEffect } from 'react'; // Import useEffect from React
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { useDispatch, useSelector } from 'react-redux';  // Import useSelector and useDispatch from Redux
import { selectUser, login, logout } from './features/UserSlice';  // Import login and logout from UserSlice
import Login from './Login';
import { auth } from './firebase';
import Widgets from './Widgets';

function App() {
  // Use useSelector to access the Redux store's user state
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // User is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        // User is logged out
        dispatch(logout());
      }
    });

    return () => unsubscribe(); // Cleanup listener on component unmount
  }, [dispatch]);

  return (
    <div className="app">
      {/* Render Header component */}
      <Header />

      {!user ? (
        <Login /> // If no user, show Login component
      ) : (
        <div className="app__body">
          {/* Render Sidebar and Feed components */}
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;

