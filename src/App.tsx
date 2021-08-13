import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Shop} from './Screens/Shop/Shop'
import { Navbar } from './Screens/Navbar/Navbar'
import Background  from './Resources/cat 2.jpg'

function App() {
  const [showShop, setShowShop] = useState(true);
  const handleShowShop = () => {
    setShowShop(!showShop);
  }
  return (
    <div className="App">
      <img src = {Background} style={{height:"700px", width:"450px"}}/>
      <Shop
        showShop = {showShop}
        handleShowShop = {handleShowShop}/>
    </div>
  );
}

export default App;
