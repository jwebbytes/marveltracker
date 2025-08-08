import Dropdown from "./Dropdown";
import Movielist from "./Movielist";

function Phaseselection() {
  return (
    <div className="phaseselection">
      <h2>Select a Phase</h2>
      <Dropdown />
      <Movielist />
    </div>
  );
}

export default Phaseselection;