import React from "react";
import "../index.css"; // Import the CSS file for this component
import goalOfYearImage from "../IMG_5810.jpeg";
import youngPlayerOfYearImage from "../IMG_5812.jpeg";
import playerOfYearImage from "../IMG_5813.jpeg";
const AwardsPage = () => {
  return (
    <div>
        <h1 className="gold">Awards</h1>
      <div className="page-content3">
        
        <section className="award-section">
          <h2 className="tert2">Player of the Year</h2>
          <img src={playerOfYearImage} alt="Player of the Year" />
          <p>2023 - Juan Carlos Cardona</p>
          
          {/* Add more award years and winners as needed */}
        </section>
        <section className="award-section">
          <h2 className="tert2">Young Player of the Year</h2>
          <img src={youngPlayerOfYearImage} alt="Young Player of the Year" />
          <p>2023 - Duarte</p>
          
          {/* Add more award years and winners as needed */}
        </section>
        <section className="award-section">
          <h2 className="tert2">Goal of the Year</h2>
          <img src={goalOfYearImage} alt="Goal of the Year" />
          <p>2023 - Luis Romo (vs. Central Córdoba)</p>
          
          {/* Add more award years and winners as needed */}
        </section>
        {/* Add more award categories and winners as needed */}
        
      </div>
     
        <div className="statement">
            <p>
                Congratulations on behalf of the club to all of this years award winners. We cannot wait to see what the future holds for us all.
            </p>
        </div>
        
        
    </div>
  );
};

export default AwardsPage;
