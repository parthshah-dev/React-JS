import "./ToggleSwitch.css";
import { useState } from "react";

export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  const checkIsOn = isOn ? "on" : "off";
  return (
    <div className={`container ${isOn ? "dark" : "light"} `}>
      <h1>Dark Mode</h1>
      <div className="toggle-div" onClick={() => setIsOn(!isOn)}>
        <div className={`toggle-switch ${checkIsOn}`}>
          <span className="toggle-text">{checkIsOn}</span>
        </div>
      </div>
    </div>
  );
};
