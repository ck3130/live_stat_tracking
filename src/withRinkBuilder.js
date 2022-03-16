import React from "react";
import RinkComponents from "./rinkComponents";
import "./withRinkBuilder.css"

export default function WithRinkBuilder({
    onTrack = f => f,
    stats=[],
    id
}) {
    return(
        <svg id={`rink${id}`} width="400px" height="170px" onClick={onTrack}>
            <RinkComponents />
            {stats.map((stat, i) => 
            <circle key={i} cx={stat.x} cy={stat.y} r="4px" fill="orange" fillOpacity=".5"/>
            )}       
        </svg>
    );
}