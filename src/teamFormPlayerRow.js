import React, { useState } from "react";
import { useStatistics } from './statistic-hooks';
import "./teamFormPlayerRow.css"

export default function TeamFormPlayerRow({firstName, lastName, number, team}) {
    
    const { selectPlayer, playerFocus, hasPlayerFocus } = useStatistics()

    const select = e => {
        selectPlayer(number, team);
        playerFocus(e.target.id)
    }

    const id = `${team}${number}`
    
    return(
        <tr>
            <td>{ firstName } { lastName }</td>
            <td>{ number }</td>
            <td>
                <button
                    id={id} 
                    type="button" 
                    className={hasPlayerFocus === id ? "playerSelectButtonSelected" : "playerSelectButton"} 
                    name="playerSelect" 
                    onClick={select} 
                >
                        x
                </button>
            </td>
        </tr>
    );
}