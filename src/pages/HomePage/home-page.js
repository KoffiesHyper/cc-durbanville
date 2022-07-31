import React from "react";
import "./home-page.css"

export default function HomePage({ }) {
    return (
        <div>
            <div className="cover-image">
                <div className="welcome-message">
                    <h1>WELCOME</h1>
                    {/* <div className="hori-bar"></div> */}
                </div>
            </div>
            <div className="place-and-time">
                <div className="map">

                </div>

                <div className="vert-line"></div>

                <div className="info">
                    <h1>SERVICE TIMES</h1>
                    <h3>
                        <span style={{fontWeight: 'bold'}}>Summer </span> (Octorber - March) - <span style={{fontWeight: 'bold'}}>09:00</span> am
                    </h3>
                    <h3>
                        <span style={{fontWeight: 'bold'}}>Winter </span> (April - September) - <span style={{fontWeight: 'bold'}}>10:00</span> am
                    </h3>
                    <h1>CONTACT US</h1>
                    <h3>
                        <span style={{fontWeight: 'bold'}}>Telephone: </span> +27 (84) 622 6877
                    </h3>
                    <h3>
                        <span style={{fontWeight: 'bold'}}>Email: </span> calvarychapel7550@gmail.com
                    </h3>
                </div>
            </div>
        </div>
    );
}