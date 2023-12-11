import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
//import './App.css';
import NavBar from './components/header/Navbar';
import Home from './pages/1.home/Home';
import Events from './pages/2.events/Events';
import RoadWork from './pages/3.roadWork/RoadWork';
import Entertainment from './pages/4.entertainment/Entertainment';
import SecondHandShops from './pages/5.secondHandShops/SecondHandShops';
import Restaurants from './pages/6.restaurants/Restaurants';
import Voting from './pages/7.voting/Voting';
import WalkInClinics from './pages/8.walkInClinics/WalkInClinics';
import Footer from './components/footer/Footer';



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
          
        </Router>
      </div>
  
  )
}

export default App
