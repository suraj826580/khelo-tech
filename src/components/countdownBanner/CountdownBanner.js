import React from "react";
import countdownImage from "../../assets/images/countdownBanner.png";

function CountdownBanner() {
  return (
    <div className="countdown-banner">
      <img src={countdownImage} alt="Countdown Banner" height={70} />
    </div>
  );
}

export default CountdownBanner;
