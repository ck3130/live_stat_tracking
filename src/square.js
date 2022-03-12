import React from "react";

export default function SquareBuilder() {
    const f = event => {
        console.log(event.pageX, event.pageY)
    }
    return (
        <svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" fill="navy" onClick={f}/>
        </svg>

    );
}