// Import the necessary Firebase modules
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Firebase configuration object with your project's details
const firebaseConfig = {
  apiKey: "AIzaSyDBvpBN5SCfO3fP4MvuSMYqM6-RGQu9E4M",
  authDomain: "nextlink-d6a96.firebaseapp.com",
  projectId: "nextlink-d6a96",
  storageBucket: "nextlink-d6a96.appspot.com",
  messagingSenderId: "954268513155",
  appId: "1:954268513155:web:69be99a0bfa67ce2a27cb6"
};

// Initialize Firebase app with the configuration
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore (database service)
const db = getFirestore(firebaseApp);

// Initialize Firebase Authentication service
const auth = getAuth(firebaseApp);

// Export the auth and db instances for use in other files
export { auth, db };
