import React, { createContext, useContext, useState } from "react";

const StatisticsContext = createContext();
export const useStatistics = () => useContext(StatisticsContext);

export default function StatisticProvider({ children }) {

    const [statistics, setStatistics] = useState([]);

    const trackStat = (x,y) => 
        setStatistics([
            ...statistics, 
            {
                x,
                y
            }
        ]);
     
    return (
        <StatisticsContext.Provider value={{ statistics, trackStat }}>
            {children}
        </StatisticsContext.Provider>
    )
}