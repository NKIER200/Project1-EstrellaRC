import React from "react";
import "../index.css"; // Import the CSS file for this component
import backgroundImg from "../IMG_5817.jpeg";

const HonoursPage = () => {
  return (
    <div>
     
      
      <div className="page-content">
      <div
        className="background-image2"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      ></div>
        <h1 className="truegold1">Honours</h1>
        <section>
          <h2 className="blu3">Major League Titles</h2>
          <div className="hons">
          <div className="leagues">
            <p>Champion of LPF - Season 2024</p>
            {/* Add more trophy names as needed */}
          </div>
          <h2 className="gold2">Domestic Major Cups</h2>
          <div className="cups">
          <p>Winners of Copa de Primera - Season 2023</p>
          </div>
          <h2 className="truegold">Continental Cups</h2>
          <div className="Continental">
          <p>Winners of Conmebol Libertadores - Season 2024</p>
          </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HonoursPage;
