import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Shop} from './Screens/Shop/Shop'
import { Navbar } from './Screens/Navbar/Navbar'

function App() {
  const [showShop, setShowShop] = useState(true);
  const handleShowShop = () => {
    setShowShop(!showShop);
  }
  return (
    <div className="App">
      {showShop && 
      <Shop 
        showShop = {showShop}
        handleShowShop = {handleShowShop}/>
      }
    </div>
  );
}

export default App;
