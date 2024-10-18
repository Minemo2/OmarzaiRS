import React from "react";
import './Footer.css';
import { SocialIcon } from 'react-social-icons';

function Footer (){
    var year = new Date().getFullYear();
    const fb = <SocialIcon url="https://www.facebook.com/rijschoolomarzai/?locale=fr_FR"
    style={{ height: 30, width: 30 }} // Set the size here
        target="_blank" />
    const tt = <SocialIcon url="https://www.tiktok.com/@rijschoolomarzai" 
    style={{ height: 30, width: 30 }} // Set the size here
        target="_blank"/>
    const inst = <SocialIcon url="https://www.instagram.com/rijschoolomarzai/" 
    style={{ height: 30, width: 30 }} // Set the size here
        target="_blank"/>

    return(
        <div className="main-contain">
            <div>
                <br></br>
            </div>
        <hr ></hr>
        <div className="footer-container">
            <div>
                
                <p>© Copyright {year} Rijschool Omarzai &nbsp;|&nbsp; Alle Rechten Voorbehouden &nbsp;|&nbsp; <span className="dev-t">
                Developed by</span> Obaidullah Izam</p>
            </div>
            
        </div>
        <div className="social-networks">
                {fb} &nbsp;
                {tt}&nbsp;
                {inst}
                
            </div>
        <hr className="f-hr"></hr>
        <hr className="f-hr"></hr>
        </div>
    );
}

export default Footer;