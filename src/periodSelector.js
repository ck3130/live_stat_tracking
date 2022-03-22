import React, { useState } from "react"
import "./periodSelector.css";
import { useStatistics } from "./statistic-hooks";

export default function PeriodSelector() {
    const { selectPeriod } = useStatistics()
    const [selected, setSelected] = useState("1");

    const changePeriod = e => {
        let period = e.target.value;
        selectPeriod(period)
        setSelected(period);

    }

    return (
        <form className="periodSelectorForm">
            <input type="radio" name="1" id="1" value="1" checked={"1" === selected} onChange={changePeriod} />
            <label htmlFor="1">Period 1</label>
            <input type="radio" name="2" id="2" value="2" checked={"2" === selected} onChange={changePeriod}/>
            <label htmlFor="2">Period 2</label>
            <input type="radio" name="3" id="3" value="3" checked={"3" === selected} onChange={changePeriod}/>
            <label htmlFor="3">Period 3</label>
            <input type="radio" name="OT" id="OT" value="OT" checked={"OT" === selected} onChange={changePeriod}/>
            <label htmlFor="OT">OT</label>
        </form> 
    );
}