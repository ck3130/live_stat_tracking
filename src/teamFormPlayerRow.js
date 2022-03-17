import React from "react";
import { useStatistics } from './statistic-hooks';

export default function TeamFormPlayerRow({firstName, lastName, number, team}) {
    const { selectPlayer } = useStatistics()
    const select = e => {
        selectPlayer(number, team)
    }
    return(
        <tr>
            <td>{ firstName } { lastName }</td>
            <td>{ number }</td>
            <td><button onClick={select}>X</button></td>
        </tr>
    );
}