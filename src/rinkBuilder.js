import React from "react";

export default function RinkBuilder() {
    return(
        <svg width="400pt" height="170pt" >
            {/* main rink*/}
            <rect 
                x="0pt" y="0pt"
                width="400pt" height="170pt" 
                fill="grey"
                rx="25pt"
            />
            {/* left goal crease */}
            <svg x="22pt" y="71pt">
            <circle cx="0pt" cy="14pt" r="14pt" stroke="red" fill="teal"/>
            </svg>

            {/* right goal crease */}
            <svg x="356pt" y="71pt" width="22pt">
            <circle cx="22pt" cy="14pt" r="14pt" stroke="red" fill="teal"/>
            </svg>

            {/* left goal line */}
            <line x1="22pt" y1="0pt" x2="22pt" y2="170pt" stroke="red" />

            {/* left blue line */}
            <line x1="150pt" y1="0pt" x2="150pt" y2="170pt" stroke="blue" />

            {/* center line */}
            <line x1="200pt" y1="0pt" x2="200pt" y2="170pt" stroke="red" />

            {/* right blue line */}
            <line x1="250pt" y1="0pt" x2="250pt" y2="170pt" stroke="blue" />

            {/* right goal line */}
            <line x1="378pt" y1="0pt" x2="378pt" y2="170pt" stroke="red" />

            {/* top-left face-off*/}
            <circle cx="62pt" cy="41pt" r="30pt" stroke="red" fill="none"/>
            <circle cx="62pt" cy="41pt" r="4pt" fill="red"/>

            {/* bottom-left face-off*/}
            <circle cx="62pt" cy="129pt" r="30pt" stroke="red" fill="none"/>
            <circle cx="62pt" cy="129pt" r="4pt" fill="red"/>

            {/* top-right face-off*/}
            <circle cx="338pt" cy="41pt" r="30pt" stroke="red" fill="none"/>
            <circle cx="338pt" cy="41pt" r="4pt" fill="red"/>

            {/* bottom-right face-off*/}
            <circle cx="338pt" cy="129pt" r="30pt" stroke="red" fill="none"/>
            <circle cx="338pt" cy="129pt" r="4pt" fill="red"/>

        </svg>
    );
}