import React from "react";
import './Navigation.css';

function Navigation (){
    return (
        <div>
        <nav>
          <div className="main-logo">
            <img src='../main-logo.png' alt='logo' />
          </div>
          <ul className="main-menu" >
            <li href="#">MENU</li>
            <li href="#">OVER ONS</li>
            <li href="#">INFORMATIE</li>
            <li href="#">TARIEVEN</li>
            <li href="#">THEORIE</li>
            <li href="#">CONTACT</li>
          </ul>

        </nav>
        </div>
    );
}

export default Navigation;