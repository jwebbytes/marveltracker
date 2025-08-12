import Dropdown from "./Dropdown";
import Movielist from "./Movielist";
import React, { useState } from "react";


// Using components Dropdown and Movielist. State is passed
function Phaseselection() {

  const [selectedPhase, setSelectedPhase] = useState("1");

  return (
    <div className="phaseselection">
      <h2>Select a Phase</h2>
      <Dropdown selectedPhase={selectedPhase} />
      <Movielist />
    </div>
  );
}

export default Phaseselection;