import React from "react";
import "./HomeOnzePakketten.css"

function HomeOnzePakketten() {
  return (
    <div >
      <div className="home-pakons" >
        <h1>ONZE PAKKETTEN</h1>
        <div className="text-pakons">
          <span className="pakdots">...</span>
          <p>
            Onze <span className="exc">exclusieve</span> lespakketten vormen een essentieel fundament voor
            het behalen van jou rijbewijs. Ervaar <span className="exc">premium</span> begeleiding door:<br></br>
            👔 Deskundige instructeurs<br></br>
            🕣 Flexibele lesuren<br></br> 
            🚗 Moderne lesvoertuigen <br></br> 
            Dit allemaal gericht op het essentiële leerplezier
            van Omarzai rijden.👇( Losse rijlessen zijn ook mogelijk)
          </p>
        </div>
      </div>
      <div className="pakket-container">
        <div className="pak-box">
            <h3>MEDIUM</h3>
            <p>
            € <span className="pak-price">1350</span>
            </p>
            <p>20uur van (60min)</p>
            <p>Exclusief Tussentidjse toets</p>
            <button className="btn-home-overons">CONTACT US</button>
        </div>
        <div className="pak-box">
            <h3>LARGE</h3>
            <p>
            € <span className="pak-price">1970</span>
            </p>
            <p>30uur van (60min)</p>
            <p>Exclusief Tussentidjse toets</p>
            <button className="btn-home-overons">CONTACT US</button>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default HomeOnzePakketten;
