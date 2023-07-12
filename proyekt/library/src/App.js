import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './container/home';
import ABoo from './components/forbooks'
import Events from './components/event';
import ABook from './components/onebook';
import AnBook from './components/onaudio';
import AnAook from './components/onarticle';
import AnWork from './components/anwork';
import ABo from './components/foraudios';
import Alpha from './components/forworks';
import ABobo from './components/forarticle';
import Contact from './components/contact';
import ABoobo from './components/search';
import Signup from './components/signup';
import Signin from './components/signin';
import Allure from './components/newone';
const App = () => {
  return (
    <Router>
      <Routes>
         (
            <Route path='/audio' element={<ABo />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/audio' element={<ABo />} />
            <Route path='/books' element={<ABoo />} />
            <Route path='/book/*' element={<ABook />} />
            <Route path='/audiobook/*' element={<AnBook />} />
            <Route path='/article/*' element={<AnAook />} />
            <Route path='/work/*' element={<AnWork />} />
            <Route path='/work' element={<Alpha />} />
            <Route path='/article' element={<ABobo />} />
            <Route path='/event' element={<Events />} />
            <Route path='/*' element={<Home />} />
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/discover' element={<ABoobo/>}/>
            <Route path='/profile' element={<Allure/>}/>
        )
      </Routes>
    </Router>
  );
};

export default App;