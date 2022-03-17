import React, { createContext, useContext, useState } from "react";
import teamOne from "./data/teamOne.json";
import teamTwo from "./data/teamTwo.json";

const StatisticsContext = createContext();
export const useStatistics = () => useContext(StatisticsContext);

export default function StatisticProvider({ children }) {

    const [statistics, setStatistics] = useState([]);
    const [players, setPlayers] = useState([...teamOne, ...teamTwo])
    const [shotCount, setShotCount] = useState(0)
    const [selectedPlayer, setSelectedPlayer] = useState()

    const addShot = () => setShotCount(shotCount + 1)

    const trackStat = (x,y, player) => {
        if (selectedPlayer) {  
            setStatistics([
                ...statistics, 
                {
                    x,
                    y,
                    player:selectedPlayer,
                    shotCount:shotCount+1
                }
            ]); 
            addShot();
            setSelectedPlayer()
        }
    }

    const selectPlayer = (number, team) => setSelectedPlayer({number, team})
     
    return (
        <StatisticsContext.Provider value={{ statistics, trackStat, players, selectPlayer }}>
            {children}
        </StatisticsContext.Provider>
    )
}