// Import Firebase modules
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBvpBN5SCfO3fP4MvuSMYqM6-RGQu9E4M",
  authDomain: "nextlink-d6a96.firebaseapp.com",
  projectId: "nextlink-d6a96",
  storageBucket: "nextlink-d6a96.appspot.com",
  messagingSenderId: "954268513155",
  appId: "1:954268513155:web:69be99a0bfa67ce2a27cb6"
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore and Auth services
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

// Check if Firebase Authentication is working properly
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is signed in:", user);
  } else {
    console.log("No user is signed in.");
  }
});

// Export the instances for use in other parts of your app
export { auth, db };
