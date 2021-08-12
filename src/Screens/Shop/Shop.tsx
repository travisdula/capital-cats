import React from 'react';
import logo from './logo.svg';
import './Shop.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

interface shopProps {
  showShop : boolean;
  handleShowShop : () => void;
}
export const Shop = ({showShop, handleShowShop} : shopProps) => {
  return (
        
        <div className="section full-height">
        <input className="modal-btn"  style={{paddingLeft: "500px"}} type="checkbox" id="modal-btn" name="modal-btn"/>
        <label htmlFor="modal-btn" style={{marginTop: "500px", marginLeft:"500px"}}> Open Shop <i className="uil uil-expand-arrows"></i></label> 		
        <div className="modal">		
          <div className="modal-wrap">	
        <img src="assets/" alt=""/>	
            <p>A Cat should go in here</p>	          		
          </div>			          		
        </div>	

      <a href="https://front.codes/" className="logo" target="_blank">
      </a>	
      </div>
  )
};