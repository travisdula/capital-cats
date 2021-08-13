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
          <div className="summary">
            <h3>You saved <b>$180.54</b> this month!</h3>
            <p><b>$14.07</b> more than last month!</p>
            <p>Your savings gained you <i>42 kibble koins</i> for your cats!</p>
          </div>

          <h5>View your savings in detail</h5>
          <div className="row">
            <div className="column1">
              <p>Visa ...1234</p>
            </div>
            <div className="column2">
              <p>$582.17</p>
            </div>
          </div>

          <div className="row">
            <div className="column1">
              <p>Capital One ...3214</p>
            </div>
            <div className="column2">
              <p>$2,871.11</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
