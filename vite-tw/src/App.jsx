import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
//import './App.css';
import NavBar from './components/header/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/1.home/Home';
import Events from './pages/2.events/Events';
import RoadWork from './pages/3.roadWork/RoadWork';
import Entertainment from './pages/4.entertainment/Entertainment';
import SecondHandShops from './pages/5.secondHandShops/SecondHandShops';
import Restaurants from './pages/6.restaurants/Restaurants';
import Voting from './pages/7.voting/Voting';
import WalkInClinics from './pages/8.walkInClinics/WalkInClinics';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {

  return (

      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route  path='/events' element={<Events />} />
            <Route  path='/roadwork' element={<RoadWork />} />
            <Route  path='/entertainment' element={<Entertainment />} />
            <Route  path='/secondhandshops' element={<SecondHandShops />} />
            <Route  path='/restaurants' element={<Restaurants />} />
            <Route  path='/voting' element={<Voting />} />
            <Route  path='/walkinclinics' element={<WalkInClinics />} />
          </Routes>
          <Footer/>
        </Router>
      </div>
  
  )
}

export default App
