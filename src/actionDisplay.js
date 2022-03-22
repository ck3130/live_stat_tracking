import React from "react";
import { useStatistics } from './statistic-hooks';
import "./actionDisplay.css"

export default function ActionDisplay ({team}) {
    const { statistics } = useStatistics()
    const filterStatistics = statistics.filter( stats => stats.player.team === team)
    if (filterStatistics.length === 0) return <p>No Items to Display</p>
    return(
        <ul>
            {filterStatistics.map((item, i) => 
                <li key={i}>
                    {item.shotCount} | #{item.player.number} | {item.detail}
                </li>
            )}
        </ul>
    )
}
