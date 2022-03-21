import React from "react";
import { useStatistics } from './statistic-hooks';
import WithRinkBuilder from './withRinkBuilder.js';
import { RinkDiv } from "./rinkDiv.js"

export default function StatTracker() {
    const { trackStat, statistics } = useStatistics();

    const ref = React.createRef();

    const click = e => {
        let node = ref
        let nodeRect = node.current.getBoundingClientRect()        
        let coordL = nodeRect.y
        let coordT = nodeRect.x
        trackStat(e.pageX-parseInt(coordT), e.pageY-parseInt(coordL))
    }

    return (
        <RinkDiv ref={ref}>
            <div>
            <WithRinkBuilder id={"track"} onTrack={click}/>
            </div>
            <div>
            <WithRinkBuilder id={"display"} stats={statistics}/>
            </div>
        </RinkDiv>
    )
} 