import React from "react";
import backgroundImg from "../IMG_5808.jpeg";
import "../index.css"; // Import the CSS file for this component

const StadiumPage = () => {
  return (
    <div className="stadium-page">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      ></div>

      <div className="page-content">
        <h1 className="truegold1">Estadio Celeste</h1>
        <div className="stadium-info">
          <div className="stadium-details">
            <p>Location: Río Cuarto, Argentina</p>
            <p>Capacity: 27,156</p>
            <p>
              The stadium began construction in late 1975, with hopes of the
              venue being used for the upcoming 1978 World Cup. However, due to
              budget constraints, the stadium's construction was delayed,
              pending termination.
            </p>
            <br />
            <p> In 1984, the project was picked up by then local rugby team "Los Leones de Río Cuarto". The hoped to turn the stadium into their on as they progressed to the top flight of Argentinian rugby. </p>
            <p> 
              This too would be short lived, with the club being relegated and subsequently entering administration.
            </p>
            <p> The stadium lay empty and abandonned until 2003, when our Chairman decided to his newly founded team Los Estrellas, needed somewhere to play as they progressed up the leagues.</p>
            <p>
              With considerable investment from our glorious chairman, the stadium finally opened it's doors in August 2011, just in time for the team, now named Estrella Río Cuarto, to begin their first season in Zone B of Torneo Argentino A, now known as Torneo Federal A.
            </p>
            <br />
            <p> The stadium has remained our home ever since, witnessing our meteoric rise to the top flight.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StadiumPage;

