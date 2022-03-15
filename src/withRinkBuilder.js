import React from "react";
import RinkComponents from "./rinkComponents";

export default function WithRinkBuilder({
    onTrack = f => f,
    stats=[]
}) {
    return(
        <svg width="400pt" height="170pt" onClick={onTrack}>
            <RinkComponents />
            {stats.map((stat, i) => 
            <circle key={i} cx={stat.x} cy={stat.y} r="4pt" fill="orange" fillOpacity=".5"/>
            )}       
        </svg>
    );
}