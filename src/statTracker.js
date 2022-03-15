import React from "react";
import { useStatistics } from './statistic-hooks';
import WithRinkBuilder from './withRinkBuilder.js';

export default function StatTracker() {
    const { trackStat, statistics } = useStatistics();

    const click = e => {
        trackStat(e.pageX, e.pageY)
    }
    return (
        <>
            <WithRinkBuilder onTrack={click}/>
            <WithRinkBuilder stats={statistics}/>
        </>
    )
} 