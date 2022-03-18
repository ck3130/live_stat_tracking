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
    const [statDetail, setStatDetail] = useState()
    const [hasPlayerFocus, setPlayerFocus] = useState()

    const addShot = () => setShotCount(shotCount + 1)

    const trackStat = (x,y, player) => {
        if (selectedPlayer && statDetail) {  
            setStatistics([
                ...statistics, 
                {
                    x,
                    y,
                    player:selectedPlayer,
                    shotCount:shotCount+1,
                    statDetail
                }
            ]); 
            addShot();
            setSelectedPlayer()
            setStatDetail()
            setPlayerFocus()
        }
    }

    const selectPlayer = (number, team) => setSelectedPlayer({number, team})

    const selectStatDetail = (detail => setStatDetail(detail))

    const playerFocus = (id) => setPlayerFocus(id)
     
    return (
        <StatisticsContext.Provider value={{ hasPlayerFocus, playerFocus, statDetail, selectStatDetail, selectedPlayer, statistics, trackStat, players, selectPlayer }}>
            {children}
        </StatisticsContext.Provider>
    )
}