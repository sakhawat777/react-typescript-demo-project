import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Shop from './components/Shop/Shop';

function App  () {
  return (
    <div>
     <Header/>
     <Banner/>
     <Shop/>
    </div>
  );
}

export default App;
