import React, { useState } from "react";
import { useNavigate } from "react-router";

import "./side-bar.css";

export default function SideBar({ showSideBar, setShowSideBar }) {
    const navigate = useNavigate();

    return (
        <>
            <div className="side-bar" style={{ display: showSideBar ? "flex" : "none" }} onClick={(e) => {
                if(e.target.id == "btn") setShowSideBar(false);
            }}>
                <button id="btn" onClick={() => navigate('/')}>Home</button>
                <button id="btn" onClick={() => navigate('/statement-of-faith')}>Statement of Faith</button>
                <button id="btn" onClick={() => navigate('/book-club')}>Book Club</button>
                <button id="btn" onClick={() => navigate('/team')}>Ministry Team</button>
                <button id="btn" onClick={() => navigate('/giving')}>Giving</button>
            </div>
        </>
    );
}