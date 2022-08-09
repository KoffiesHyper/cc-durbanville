import React from "react";
import "./calendar.css";

export default function Calendar({ }){
    const array = new Array(27).fill("Hi");
    return(
        <div className="calendar-container">
            {
                array.map((e, i) => {
                    return <Day day={i + 1} />
                })
            }
        </div>
    );
}

function Day({ day }){
    return(
        <div className="day-container">
            <p>{day}</p>
        </div>
    );
}