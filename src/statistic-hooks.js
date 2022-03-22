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
    const [statLocation, setStatLocation] = useState()
    const [period, setPeriod] = useState("1")

    const addShot = () => setShotCount(shotCount + 1)

    const trackStat = ({player, location, detail, count=shotCount, gamePeriod=period}) => {
        player = player || selectedPlayer;
        location = location || statLocation;
        detail = detail || statDetail;
        if (![player, location, detail].includes(undefined)) {
            console.log("run trackStat")
            setStatistics([
                ...statistics, 
                {
                    x: location.x,
                    y: location.y,
                    player:player,
                    shotCount:count+1,
                    detail,
                    gamePeriod
                }
            ]); 
            addShot();
            setSelectedPlayer()
            setStatDetail()
            setPlayerFocus()
            setStatLocation()
        };
    }

    const selectPlayer = (number, team) => setSelectedPlayer({number, team})

    const selectStatDetail = (detail => setStatDetail(detail))

    const playerFocus = (id) => setPlayerFocus(id)

    const selectArea = (x,y) => {
        setStatLocation({x,y}); 
    }

    const selectPeriod = (period) => {
        setPeriod(period);
    }
     
    return (
        <StatisticsContext.Provider value={{ period, selectPeriod, selectArea, hasPlayerFocus, playerFocus, statDetail, selectStatDetail, selectedPlayer, statistics, trackStat, players, selectPlayer }}>
            {children}
        </StatisticsContext.Provider>
    )
}