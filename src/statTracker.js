import React from "react";
import { useStatistics } from './statistic-hooks';
import WithRinkBuilder from './withRinkBuilder.js';
import { RinkDiv } from "./rinkDiv.js"

export default function StatTracker() {
    const { trackStat, statistics, selectArea, period } = useStatistics();

    const ref = React.createRef();

    const click = e => {
        let node = ref
        let nodeRect = node.current.getBoundingClientRect();  
        let coordL = nodeRect.y
        let coordT = nodeRect.x
        console.log('page coords', e.pageX, e.pageY)
        console.log('ele coords', coordL, coordT)
        selectArea(e.pageX-parseInt(coordT), e.pageY-parseInt(coordL));
        trackStat({location:{x:e.pageX-parseInt(coordT), y:e.pageY-parseInt(coordL)}})
    }

    let stats = statistics.filter(stat => stat.gamePeriod === period)

    return (
        <RinkDiv ref={ref}>
            <div>
            <WithRinkBuilder id={"track"} onTrack={click} stats={stats}/>
            </div>
        </RinkDiv>
    )
} 