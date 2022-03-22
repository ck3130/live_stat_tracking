import React from "react";
import { useStatistics } from './statistic-hooks';
import "./teamFormPlayerRow.css"

export default function TeamFormPlayerRow({firstName, lastName, number, team}) {
    
    const { selectPlayer, playerFocus, hasPlayerFocus, trackStat } = useStatistics()

    const select = e => {
        selectPlayer(number, team);
        playerFocus(e.target.id);
        trackStat({player:{number,team}});
    }

    const id = `${team}${number}`
    
    return(
        <tr>
            <td>{ firstName } { lastName }</td>
            <td>{ number } <button
                    id={id} 
                    type="button" 
                    className={hasPlayerFocus === id ? "playerSelectButtonSelected" : "playerSelectButton"} 
                    name="playerSelect" 
                    onClick={select} 
                />
            </td>
        </tr>
    );
}