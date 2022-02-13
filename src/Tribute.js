import React from "react";
import "./Tribute.css"

function Tribute() {
  return (
    <div className="page">
        <div className="tribute">
      <div className="tribute__header">
        <h1>Lata Mangeshkar</h1>
        <p>The Nightingale Women of India</p>
      </div>

      <div className="tribute__image">
        <img src="https://wallpaperaccess.com/full/6386207.jpg" />
        <p>Lata Mangeshkar(1942–2022)</p>
      </div>

      <div className="tribute__info">
        <h5>A Short Biography of Lata Mangeshkar</h5>
        <div className="list">
         <ul className="tribuite__list">
          <li><b>Date of Birth:</b> 28 September 1929</li>
          <li><b>Place of Birth:</b> Indore, Madhya Pradesh</li>
          <li><b>
            Parents:</b> Deenanath Mangeshkar (Father) and Shevanti Mangeshkar
            (Mother)
          </li>
          <li><b>
            Siblings:</b> Meena Khadikar, Asha Bhosle, Usha Mangeshkar, Hridaynath
            Mangeshkar
          </li>
          <li><b>Occupation:</b> Playback Singer, Music Director, Producer</li>
          <li><b>Religion:</b> Hinduism</li>
          <li><b>Start of Playback Singing Career: </b>1942</li>
          <li><b>Total number of songs (approx):</b> 50,000 in 36 languages</li>
          <li><b>Nickname: </b>Nightingale of India</li>
          <li><b>Net Worth (approx.):</b> $10 million</li>
          <li><b>Death:</b> 2022</li>
         </ul>
         </div>

        <h6>"I believe in one power, and that is the hand of God."</h6>
        <h5 >~~Lata Mangeshkar~~</h5>
      </div>
    </div>
    </div>
  );
}

export default Tribute;
