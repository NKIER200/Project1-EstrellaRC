import React from "react";
import pizza from './189737cc9fc89-master_playlist.MP4'
import "./index.css"

const Homepage = () => {
  return (
    
    <div className='mainVid' style={{ position: "relative" }}>
  <video
    src={pizza}
    autoPlay
    loop
    muted
    style={{ maxWidth: "100vw", maxHeight: "100vw"}}
  />


      <div className="text-overlay">
        <h1 className="truegold1">Welcome to Estrella RC</h1>
        <h2 className="blu3">Explore the world of our football club!</h2>
      </div>
</div>
); };
export default Homepage;