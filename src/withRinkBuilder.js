import React from "react";
import RinkComponents from "./rinkComponents";
import "./withRinkBuilder.css"

export default function WithRinkBuilder({
    onTrack = f => f,
    stats=[],
    id
}) {
    const colorPicker = stat => {
        let detail = stat.detail
        if (detail === "goal") return "blue"
        if (detail === "shotOnGoal") return "orange"
        if (detail === "miss") return "grey"
    }
    return(
        <svg id={`rink${id}`} width="400px" height="170px" onClick={onTrack}>
            <RinkComponents />
            {stats.map((stat, i) => 
            <circle key={i} cx={stat.x} cy={stat.y} r="6px" fill={colorPicker(stat)} fillOpacity=".65" />
            )}       
        </svg>
    );
}