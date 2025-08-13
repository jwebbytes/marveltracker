import Dropdown from "./Dropdown";
import Movielist from "./Movielist";
import React, { useState } from "react";


// Using components Dropdown and Movielist. State is passed
function Phaseselection() {

  const [selectedPhase, setSelectedPhase] = useState(1);

  return (
    <div className="phaseselection">
      <h2>Select a Phase: {selectedPhase}</h2>
      <Dropdown 
        onChange={(value)=>setSelectedPhase(value)} 
        />
      <Movielist selectedPhase={selectedPhase} />
    </div>
  );
}

export default Phaseselection;