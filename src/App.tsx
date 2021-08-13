//import { Home } from './Home';
import React, { useState } from 'react';
import './App.css';
import { Account } from './Screens/Account/Account';
import { Shop } from './Screens/Shop/Shop';
import Background from './Resources/cat 2.jpg';

function App() {
  const [showAccount, setShowAccount] = useState(true);
  const toggleAccount = () => {
    setShowAccount(!showAccount);
  }

  const [showShop, setShowShop] = useState(true);
  const toggleShop = () => {
    setShowShop(!showShop);
  }

  return (
    <div className="App grid place-items-center max-h-full max-w-full overflow-hidden">
        <img
            src={Background}
            //style={{height:"700px", width:"450px"}}
            alt="Background"
            className=""
        />
      <Account showAccount = {showAccount} handleShowAccount = {toggleAccount}/>
      <Shop showShop = {showShop} handleShowShop = {toggleShop}/>
    </div>
  );
}

export default App;
