import React from "react";
import "./HomeWarrom.css";

function HomeWarrom (){
    return(
        <div className="warrom-container">
            <div className="image-container">
                <img src="../warrom.png" alt="image"></img>
            </div>
            <div className="text-container">
                <h1>Waarom OmarZai?</h1>
                <ul>
                    <li>Hoog slagingspercentage</li>
                    <li>Altijd een rijopleiding op maat</li>
                    <li>Persoonlijke aandacht</li>
                    <li>Deskundige rij-instructeurs</li>
                    <li>Rijles in een nieuwe en comfortabele lesauto</li>
                    <li>7 dagen per week!</li>
                    <li>Specialist in Faalangst</li>
                </ul>
            </div>
        </div>
    );
}

export default HomeWarrom;
