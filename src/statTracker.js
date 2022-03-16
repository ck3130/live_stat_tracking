import React, { useRef } from "react";
import { useStatistics } from './statistic-hooks';
import WithRinkBuilder from './withRinkBuilder.js';
import { RinkDiv } from "./rinkDiv.js"

export default function StatTracker() {
    const { trackStat, statistics } = useStatistics();

    const ref = React.createRef();

    const click = e => {
        let node = ref
        let nodeStyle = window.getComputedStyle(node.current)
        let mL = nodeStyle.getPropertyValue("margin-left")
        let mT = nodeStyle.getPropertyValue("margin-Top")
        trackStat(e.pageX-parseInt(mL), e.pageY-parseInt(mT))
    }

    return (
        <RinkDiv ref={ref}>
            <WithRinkBuilder id={"track"} onTrack={click}/>
            <WithRinkBuilder id={"display"} stats={statistics}/>
        </RinkDiv>
    )
} 