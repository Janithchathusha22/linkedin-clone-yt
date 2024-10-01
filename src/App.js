import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { useSelector } from 'react-redux';  // Import useSelector from Redux
import { selectUser } from './features/UserSlice';  // Import the selectUser function
import Login from './Login';

function App() {
  // Use useSelector to access the Redux store's user state
  const user = useSelector(selectUser);

  return (
    <div className="app">
      {/* Render Header component */}
      <Header />

      {!user ? (
        <Login />  // If no user, show Login component
      ) : (
        <div className="app__body">
          {/* Render Sidebar and Feed components */}
          <Sidebar />
          <Feed />
        </div>
      )}
    </div>
  );
}

export default App;
