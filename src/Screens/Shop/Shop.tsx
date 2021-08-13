import React from 'react';
import './Shop.css';
import cat1 from '../../Resources/cat1.png'
import boot from '../../Resources/boots.png'
import hat from '../../Resources/hat.png'
import food from '../../Resources/food.jpg'
import '../../Utility/Typewriter.css'

interface shopProps {
  showShop : boolean;
  handleShowShop : () => void;
}

export const Shop = ({showShop, handleShowShop} : shopProps) => {
  return (

        <div className="section full-height">
        <input className="modal-btn"  style={{paddingLeft: "500px"}} type="checkbox" id="modal-btn" name="modal-btn"/>
        <label htmlFor="modal-btn" style={{marginBottom:"200px", marginLeft:"300px", width:"80px"}}>Shop<i className="uil uil-expand-arrows"></i></label>
        <div className="modal">
        <div className="modal-wrap">
        <img src={cat1} alt=""/>
        <div className="row">
          <div className="column">
          <img src={hat} style={{width:"100%"}}/>
          </div>
          <div className="column">
            <img src={boot} style={{width:"100%"}}/>
          </div>
          <div className="column">
            <img src={food} style={{width:"100%"}}/>
          </div>
        </div>
        <p className="css-typing">Meow... wish I had some boots.. mew..</p>
        </div>
        </div>
    </div>
  );
};
