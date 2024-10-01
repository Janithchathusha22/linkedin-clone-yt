import React, { useEffect, useState } from 'react';
import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import InputOption from './InputOption';
import Post from './Post';
import { db } from './firebase';
import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from 'firebase/firestore';
import { formatDistanceToNow } from 'date-fns';  // Importing date-fns for relative time display

function Feed() {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  // Fetch posts from Firestore in real-time and order by timestamp
  useEffect(() => {
    const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      })));
    });

    return () => unsubscribe(); // Cleanup on component unmount
  }, []);

  const sendPost = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'posts'), {
        name: 'Janith Chathusa',  // Replace with dynamic user name if available
        description: 'This is a test',  // Replace with dynamic description
        message: input,
        photoUrl: '',
        timestamp: serverTimestamp(),
      });
      setInput('');  // Clear input field after sending
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__input'>
          <CreateIcon />
          <form>
            <input value={input} onChange={(e) => setInput(e.target.value)} type="text" />
            <button onClick={sendPost} type='submit'>Send</button>
          </form>
        </div>
        <div className='feed__inputOption'>
          <InputOption Icon={ImageIcon} title='Photo' color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color='#E7A33E' />
          <InputOption Icon={EventNoteIcon} title="Event" color='#C0CBCD' />
          <InputOption Icon={CalendarViewDayIcon} title="Write Article" color='#7EC15E' />
        </div>
      </div>

      {/* Display posts */}
      {posts.map(({ id, data: { name, description, message, timestamp, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
          timestamp={timestamp}
        />
      ))}
    </div>
  );
}

export default Feed;
