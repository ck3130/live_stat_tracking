import React from "react";
import { useStatistics } from "./statistic-hooks";
import "./statDetailForm.css"

export default function StatDetailForm() {
    const { selectStatDetail, statDetail, trackStat } = useStatistics()

    const changeSelected = (e) => {
        selectStatDetail(e.target.value)
        trackStat({detail:e.target.value})
    }

    return (
        <form className="statDetailForm">
            <input type="radio" name="goal" id="goalStat" value="goal" checked={"goal" === statDetail} onChange={changeSelected} />
            <label htmlFor="goalStat">Goal</label>
            <input type="radio" name="shotOnGoalStat" id="shotOnGoalStat" value="shotOnGoal" checked={"shotOnGoal" === statDetail} onChange={changeSelected}/>
            <label htmlFor="shotOnGoalStat">Shot On Goal</label>
            <input type="radio" name="miss" id="missStat" value="miss" checked={"miss" === statDetail} onChange={changeSelected}/>
            <label htmlFor="missStat">Miss</label>
        </form> 
    )
}