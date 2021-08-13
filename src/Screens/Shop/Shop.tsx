import React from 'react';
import './Shop.css';
import catEmpty from '../../Resources/cat_1_dress.png'
import catHat from '../../Resources/cat_hat.png'
import catBoot from '../../Resources/cat_boots.png'
import catHatBoot from '../../Resources/cat_hat_boots.png'
import theFatCat from '../../Resources/the_fat_cat.png'
import boot from '../../Resources/boots.png'
import hat from '../../Resources/hat.png'
import food from '../../Resources/cat_food_.png'
import '../../Utility/Typewriter.css'

interface shopProps {
  showShop : boolean;
  handleShowShop : () => void;
  acc : number;
  handleSetAcc : (feature:number) => void;
}

export const Shop = ({showShop, handleShowShop, acc, handleSetAcc} : shopProps) => {
  const catDress = acc === 0 ? catEmpty : acc === 1 ? catHat : acc === 2 ? catBoot : acc === 4 ? theFatCat: catHatBoot;
  const catLine = acc === 0 || acc === 1 ? "Meow... I wish I had some boots... Mew..." : acc === 2 ? "Meow... I wish I had a hat... :3": acc === 3 ? "*beatboxes* Boots and cats and boots...": "Too many fishe... *burp*";
  return (
        <div className="section full-height">
        <input className="modal-btn"  style={{paddingLeft: "500px"}} type="checkbox" id="modal-btn" name="modal-btn"/>
        <label htmlFor="modal-btn" style={{marginBottom:"200px", marginLeft:"300px", width:"80px"}}>Shop<i className="uil uil-expand-arrows"></i></label>
        <div className="modal">
        <div className="modal-wrap">
        <img src={catDress} alt=""/>
        <div className="row">
          <div className="column">
          <img src={hat} onClick={() => handleSetAcc(1)}  style={{width:"100%"}} alt="Hat"/>
          </div>
          <div className="column">
            <img src={boot} onClick={() => handleSetAcc(2)} style={{width:"100%"}} alt="Boots"/>
          </div>
          <div className="column">
            <img src={food} onClick={() => handleSetAcc(4)} style={{width:"100%"}} alt="Food"/>
          </div>
        </div>
        <p className="css-typing">{catLine}</p>
        </div>
        </div>
    </div>
  );
};
