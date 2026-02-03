import React, { useState } from "react";
 
function Instrument() {
  const [newInstrument, setNewInstrument] = useState("");
 
  const showInstrument = () => {
    setNewInstrument("Violin");
  };
 
  return (
    <div style={{ border: "1px solid black", padding: "20px", width: "300px" }}>
      <p>Old instrument: Drums</p>
      <p>New Instrument: {newInstrument}</p>
 
      <button onClick={showInstrument}>Show</button>
    </div>
  );
}
 
export default Instrument;