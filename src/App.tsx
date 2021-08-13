//import { Home } from './Home';
import React, { useState } from 'react';
import './App.css';
import { Account } from './Screens/Account/Account';
import { Shop } from './Screens/Shop/Shop';
import Background from './Resources/bg_3.png';

function App() {
  const [showAccount, setShowAccount] = useState(true);
  const[acc, setAcc] = useState(0);//0 -> empty , 1 -> hat , 2 -> boot , 3 -> boot + hat
  const toggleAccount = () => {
    setShowAccount(!showAccount);
  }

  const [showShop, setShowShop] = useState(true);
  const toggleShop = () => {
    setShowShop(!showShop);
  }

  const handleSetAcc = (featureNum : number) => {
    if(acc == 0 || (acc == 4 || featureNum == 4))
     {
       setAcc(featureNum); // boots or hat
     }
    else if(acc != featureNum && acc != 4)
    {
       setAcc(3);//both hat and boots
    }
 }

  return (
    <div className="App grid place-items-center max-h-full overflow-hidden ">
        <img
            src={Background}
            style={{height:"700px", width:"450px"}}
        />
      <Account showAccount = {showAccount} handleShowAccount = {toggleAccount}/>
      <Shop showShop = {showShop} handleShowShop = {toggleShop} acc={acc} handleSetAcc={handleSetAcc}/>
    </div>
  );
}

export default App;
