import React from "react";
import "../index.css"; 
import playerOfYearImage2027 from "../IMG_6065.jpeg";
import goalOfYearImage2027 from "../IMG_6066.jpeg";
import playerOfYearImage2026 from "../IMG_5923.jpeg";
import playerOfYearImage2025 from "../IMG_5880.jpeg";
import goalOfYearImage2024 from "../IMG_5851.jpg";
import goalOfYearImage2026 from "../IMG_5922.jpeg";
import playerOfYearImage2024 from "../IMG_5852.jpg";
import goalOfYearImage from "../IMG_5810.jpeg";
import youngPlayerOfYearImage from "../IMG_5812.jpeg";
import playerOfYearImage from "../IMG_5813.jpeg";
const AwardsPage = () => {
  return (
    <div>
        <h1 className="truegold1">Awards</h1>
        
      <div className="page-content3">
      <section className="award-section">
          <h2 className="tert2">Player of the Year</h2>
          <img src={playerOfYearImage2027} alt="Player of the Year 2027" />
          <p>2027 - Leonel Duarte</p>
          
          {/* Add more award years and winners as needed */}
        </section>
        <section className="award-section">
          <h2 className="tert2">Young Player of the Year</h2>
          <img src={playerOfYearImage2027} alt="Young Player of the Year 2027" />
          <p>2027 - Leonel Duarte</p>
          
          {/* Add more award years and winners as needed */}
        </section>
        <section className="award-section">
          <h2 className="tert2">Goal of the Year</h2>
          <img src={goalOfYearImage2027} alt="Goal of the Year 2027" />
          <p>2026 - Felipe (vs. Huracán, Copa de Primera)</p>
          
          {/* Add more award years and winners as needed */}
        </section>
      <section className="award-section">
          <h2 className="tert2">Player of the Year</h2>
          <img src={playerOfYearImage2026} alt="Player of the Year 2026" />
          <p>2026 - Yago Pardo</p>
          
          {/* Add more award years and winners as needed */}
        </section>
        <section className="award-section">
          <h2 className="tert2">Young Player of the Year</h2>
          <img src={playerOfYearImage2026} alt="Young Player of the Year 2026" />
          <p>2026 - Yago Pardo</p>
          
          {/* Add more award years and winners as needed */}
        </section>
        <section className="award-section">
          <h2 className="tert2">Goal of the Year</h2>
          <img src={goalOfYearImage2026} alt="Goal of the Year 2026" />
          <p>2026 - Duarte (vs. Huracán, Copa de Primera Final)</p>
          
          {/* Add more award years and winners as needed */}
        </section>
      <section className="award-section">
          <h2 className="tert2">Player of the Year</h2>
          <img src={playerOfYearImage2025} alt="Player of the Year 2025" />
          <p>2025 - Yago Pardo</p>
          
          {/* Add more award years and winners as needed */}
        </section>
        <section className="award-section">
          <h2 className="tert2">Young Player of the Year</h2>
          <img src={playerOfYearImage2025} alt="Young Player of the Year 2025" />
          <p>2025 - Yago Pardo</p>
          
          {/* Add more award years and winners as needed */}
        </section>
        <section className="award-section">
          <h2 className="tert2">Goal of the Year</h2>
          <img src={playerOfYearImage2025} alt="Goal of the Year 2025" />
          <p>2025 - Yago Pardo (vs. BOCA Juniors)</p>
          
          {/* Add more award years and winners as needed */}
        </section>
      <section className="award-section">
          <h2 className="tert2">Player of the Year</h2>
          <img src={playerOfYearImage2024} alt="Player of the Year 2024" />
          <p>2024 - Duarte</p>
          
          {/* Add more award years and winners as needed */}
        </section>
        <section className="award-section">
          <h2 className="tert2">Young Player of the Year</h2>
          <img src={playerOfYearImage2024} alt="Young Player of the Year 2024" />
          <p>2024 - Duarte</p>
          
          {/* Add more award years and winners as needed */}
        </section>
        <section className="award-section">
          <h2 className="tert2">Goal of the Year</h2>
          <img src={goalOfYearImage2024} alt="Goal of the Year 2024" />
          <p>2024 - Yago Pardo (vs. Central Córdoba)</p>
          
          {/* Add more award years and winners as needed */}
        </section>
        {/* Add more award categories and winners as needed */}
        
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
