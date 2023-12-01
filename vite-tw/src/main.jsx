import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { firestoreInstance } from './services/firestoreService.jsx';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTGZ5rNvEHlvTCkjUkjjCtbgaknw1rLFs",
  authDomain: "encylopediaconway.firebaseapp.com",
  projectId: "encylopediaconway",
  storageBucket: "encylopediaconway.appspot.com",
  messagingSenderId: "895775147574",
  appId: "1:895775147574:web:2b39cbcc2774e2c1cd3a97",
  measurementId: "G-Y28B7E23P5"
};

// Initialize Firebase
initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
