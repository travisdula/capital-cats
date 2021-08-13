import React from 'react';
import './Shop.css';
import cat1 from '../../Resources/cat1.png'

interface shopProps {
  showShop : boolean;
  handleShowShop : () => void;
}

export const Shop = ({showShop, handleShowShop} : shopProps) => {
  return (
    <div className="section full-height">
      <input className="modal-btn" style={{paddingLeft: "500px"}} type="checkbox" id="modal-btn" name="modal-btn"/>

      <label htmlFor="modal-btn" style={{marginBottom:"200px", marginLeft:"300px", width:"80px"}}>Shop<i className="uil uil-expand-arrows"></i></label>

      <div className="modal">
        <div className="modal-wrap">
          <img src={cat1} alt="Cat"/>
          <p>A Cat should go in here</p>
        </div>
      </div>
    </div>
  );
};
