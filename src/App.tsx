import React, { useState } from 'react';
import './App.css';
import { Account } from './Screens/Account/Account';
import { Shop } from './Screens/Shop/Shop';
import Background from './Resources/bg_3.png';

function App() {
  const [showAccount, setShowAccount] = useState(true);

  // 0 = empty, 1 = hat, 2 = boots, 3 = boots and hat
  const [acc, setAcc] = useState(0);
  const toggleAccount = () => {
      setShowAccount(!showAccount);
  }

  const [showShop, setShowShop] = useState(true);
  const toggleShop = () => {
    setShowShop(!showShop);
  }

  const handleSetAcc = (featureNum: number) => {
    if (acc === 0 || (acc === 4 || featureNum === 4)) {
      setAcc(featureNum); // Boots or hat
    }
    else if (acc !== featureNum && acc !== 4) {
      setAcc(3);  // Boots and hat
    }
  }

  return (
    <div className="App grid place-items-center max-h-full overflow-hidden ">
      <img src={Background} style={{ height: "700px", width: "450px" }} alt="Background" />

      <Account showAccount={showAccount} handleShowAccount={toggleAccount} />
      <Shop showShop={showShop} handleShowShop={toggleShop} acc={acc} handleSetAcc={handleSetAcc} />
    </div>
  );
}

export default App;
