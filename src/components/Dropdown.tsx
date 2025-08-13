function Dropdown({onChange}: {onChange: (phase: number) => void}) {
    return(
        <div className="dropdown">
            <label htmlFor="phase-select">Select Phase:</label>
            <select id="phase-select" className="dropdown-select" onChange={(e)=>{onChange(Number(e.target.value))}}>
                <option value="1">Phase 1</option>
                <option value="2">Phase 2</option>
                <option value="3">Phase 3</option>
                
            </select>
        </div>
    )
}

export default Dropdown;