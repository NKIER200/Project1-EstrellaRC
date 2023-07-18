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
        <h1 className="gold">Honours</h1>
        <section>
          <h2 className="blu3">Leagues</h2>
          <div className="hons">
          <div className="leagues">
          <p>Champion of Torneo Federal C - Season 2007/2008</p>
          <p>Champion of Torneo Federal B - Season 2010/2011</p>
          <p>Champion of Torneo Federal A - Season 2015/2016</p>
          <p>Champion of Torneo Federal A - Season 2018/2019</p>
            <p>Champion of Primera B Nacional - Season 2021/2022</p>
            <p>Champion of LPF - Season 2024</p>
            {/* Add more trophy names as needed */}
          </div>
          <h2 className="gold2">Cups</h2>
          <div className="cups">
          <p>Winners of Copa de la Cordoba - Season 2000/2001</p>
          <p>Winners of  Copa de la Cordoba - Season 2001/2002</p>
          <p>Winners of Copa de la Cordoba - Season 2003/2004</p>
          <p>Winners of Copa de la Cordoba - Season 2004/2005</p>
          <p>Winners of Copa de la Cordoba - Season 2005/2006</p>
          <p>Winners of Copa de la Cordoba - Season 2007/2008</p>
          <p>Winners of Copa de la Cordoba - Season 2009/2010</p>
          <p>Winners of Copa de la Cordoba - Season 2010/2011</p>
          <p>Winners of Copa de Primera - Season 2023</p>
          </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HonoursPage;
