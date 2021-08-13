import React from 'react';
import './Account.css';

interface accountProps {
  showAccount : boolean;
  handleShowAccount : () => void;
}

export const Account = ({showAccount, handleShowAccount} : accountProps) => {
  return (
    <div className="section full-height">
      <input className="modal-btn" style={{paddingLeft: "500px"}} type="checkbox" id="account-btn" name="modal-btn"/>

      <label htmlFor="account-btn" style={{marginBottom:"400px", marginLeft:"300px", width:"80px"}}>Account<i className="uil uil-expand-arrows"></i></label>

      <div className="modal">
        <div className="modal-wrap">
          <p>Account goes here</p>
        </div>
      </div>
    </div>
  );
};
