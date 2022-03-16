import React from "react";

export default function RinkComponents(){
    
    return (
        <>
            {/* main rink*/}
            <rect 
                x="0px" y="0px"
                width="400px" height="170px" 
                fill="aliceblue"
                rx="25px"
            />
            {/* left goal crease */}
            <svg x="22px" y="71px">
            <circle cx="0px" cy="14px" r="14px" stroke="red" fill="teal"/>
            </svg>

            {/* right goal crease */}
            <svg x="356px" y="71px" width="22px">
            <circle cx="22px" cy="14px" r="14px" stroke="red" fill="teal"/>
            </svg>

            {/* left goal line */}
            <line x1="22px" y1="0px" x2="22px" y2="170px" stroke="red" />

            {/* left blue line */}
            <line x1="150px" y1="0px" x2="150px" y2="170px" stroke="blue" />

            {/* center line */}
            <line x1="200px" y1="0px" x2="200px" y2="170px" stroke="red" />

            {/* right blue line */}
            <line x1="250px" y1="0px" x2="250px" y2="170px" stroke="blue" />

            {/* right goal line */}
            <line x1="378px" y1="0px" x2="378px" y2="170px" stroke="red" />

            {/* top-left face-off*/}
            <circle cx="62px" cy="41px" r="30px" stroke="red" fill="none"/>
            <circle cx="62px" cy="41px" r="4px" fill="red"/>

            {/* bottom-left face-off*/}
            <circle cx="62px" cy="129px" r="30px" stroke="red" fill="none"/>
            <circle cx="62px" cy="129px" r="4px" fill="red"/>

            {/* top-right face-off*/}
            <circle cx="338px" cy="41px" r="30px" stroke="red" fill="none"/>
            <circle cx="338px" cy="41px" r="4px" fill="red"/>

            {/* bottom-right face-off*/}
            <circle cx="338px" cy="129px" r="30px" stroke="red" fill="none"/>
            <circle cx="338px" cy="129px" r="4px" fill="red"/>
        </>
    );
}