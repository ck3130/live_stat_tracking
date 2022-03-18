import React, { useState } from "react";
import { useStatistics } from './statistic-hooks';
import "./teamFormPlayerRow.css"

export default function TeamFormPlayerRow({firstName, lastName, number, team}) {
    
    const { selectPlayer } = useStatistics()
    const [hasFocus, setFocus] = useState(false)

    const select = e => {
        selectPlayer(number, team);
    }
    
    return(
        <tr>
            <td>{ firstName } { lastName }</td>
            <td>{ number }</td>
            <td>
                <button 
                    type="button" 
                    className={hasFocus ? "playerSelectButtonSelected" : "playerSelectButton"} 
                    name="playerSelect" 
                    onClick={select} 
                    onFocus={() => setFocus(true)} 
                    onBlur={() => setFocus(false)}>
                        x
                </button>
            </td>
        </tr>
    );
}