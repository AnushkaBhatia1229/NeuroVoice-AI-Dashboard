import { FaMicrophone } from "react-icons/fa";
import { useState } from "react";

function VoiceControl() {
  const [message, setMessage] = useState("Click Mic");

  const handleVoice = () => {
    setMessage("Listening...");
  };

  return (
    <div className="voice-card">
      <button
        className="voice-btn"
        onClick={handleVoice}
      >
        <FaMicrophone />
      </button>

      <h3>{message}</h3>

      <div className="result-box">
        <p>Try saying:</p>
        <span>"Open Dashboard"</span>
      </div>
    </div>
  );
}

export default VoiceControl;