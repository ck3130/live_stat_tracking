import React from "react";
import { useStatistics } from './statistic-hooks';
import TeamFormPlayerRow from "./teamFormPlayerRow";

export default function TeamForm({ team }) {
    const { players } = useStatistics()
    const filterPlayerList = players.filter( player => player.team === team)
    return(
        <table>
            <thead>
                <tr>
                    <th>Player</th>
                    <th>Number</th>
                </tr>
            </thead>
            <tbody>
            {filterPlayerList.map( (player, i ) =>
                <TeamFormPlayerRow key={ i } {...player} />
            )}
            </tbody>
        </table>
    );
}