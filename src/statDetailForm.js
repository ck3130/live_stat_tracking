import React from "react";
import { useStatistics } from "./statistic-hooks";

export default function StatDetailForm() {
    const { selectStatDetail, statDetail } = useStatistics()

    const changeSelected = (e) => {
        selectStatDetail(e.target.value)
    }

    return (
        <form>
            <input type="radio" name="goal" id="goalStat" value="goal" checked={"goal" === statDetail} onChange={changeSelected} />
            <label for="goalStat">Goal</label>
            <input type="radio" name="shotOnGoalStat" id="shotOnGoalStat" value="shotOnGoal" checked={"shotOnGoal" === statDetail} onChange={changeSelected}/>
            <label for="shotOnGoalStat">Shot On Goal</label>
            <input type="radio" name="miss" id="missStat" value="miss" checked={"miss" === statDetail} onChange={changeSelected}/>
            <label for="missStat">Miss</label>
        </form> 
    )
}