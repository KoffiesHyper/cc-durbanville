import React from "react";
import "./home-page.css";
import { IconContext } from "react-icons";
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io";
import GoogleMap from "../../components/Map/GoogleMap";
import Calendar from "../../components/Calendar/calendar";

export default function HomePage({ google }) {
    return (
        <div>
            <div className="home-cover-image">
                <div className="welcome-message">
                    <div className="hori-bar"></div>
                    <h1>Welcome</h1>
                    <div className="hori-bar"></div>
                </div>
            </div>
            <div className="place-and-time">
                <div className="map">
                    <h1>Place</h1>
                    {/* <GoogleMap /> */}
                </div>

                <div className="vert-line"></div>

                <div className="info">
                    <h1>SERVICE TIMES</h1>
                    <h3>
                        <span style={{ fontWeight: 'bold' }}>Summer </span> (Octorber - March) - <span style={{ fontWeight: 'bold' }}>09:00</span> am
                    </h3>
                    <h3>
                        <span style={{ fontWeight: 'bold' }}>Winter </span> (April - September) - <span style={{ fontWeight: 'bold' }}>10:00</span> am
                    </h3>
                    <h1>CONTACT US</h1>
                    <h3>
                        <span style={{ fontWeight: 'bold' }}>Telephone: </span> +27 (84) 622 6877
                    </h3>
                    <h3>
                        <span style={{ fontWeight: 'bold' }}>Email: </span> calvarychapel7550@gmail.com
                    </h3>
                    <h1>Social Media</h1>
                    <div>
                        <button>
                            <a href="https://www.facebook.com/ccdurbanville" target="_blank">
                                <IconContext.Provider value={{ size: '35' }}><IoLogoFacebook /></IconContext.Provider>
                            </a>
                        </button>
                        <button>
                            <a href="https://www.instagram.com/calvarydurbanville/" target="_blank">
                                <IconContext.Provider value={{ size: '36' }}><IoLogoInstagram /></IconContext.Provider>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            <div className="calendar">
                <Calendar />
            </div>
        </div>
    );
}