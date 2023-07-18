import React from "react";
import pizza from './1896b0f41ee26-master_playlist.MP4'
import "./index.css"

const Homepage = () => {
  return (
    
    <div className='mainVid'>
      <h1 className="gold">Welcome to Estrella RC</h1>
      <h2 className="tert2">Explore the world of our football club!</h2>
      

      <video src={pizza} autoPlay loop muted />
</div>
); };
export default Homepage;