import React from "react";
import './Navbar.css';
import '../Shop/Shop.css';

interface NavbarProps {
    handleShowShop : () => void;
}

export const Navbar = ({handleShowShop} : NavbarProps) => {
  return (
    <div>
      <input className="modal-btn" type="checkbox" id="modal-btn" name="modal-btn"/>
      <label htmlFor="modal-btn" onClick={handleShowShop}>Open Modal<i className="uil uil-expand-arrows"></i></label>
    </div>
  );
};
