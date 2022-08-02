import React from "react";
import "./team.css";

export default function Team({}){
    return(
        <div>
            <div className="team-cover-image">
                <div className="welcome-message">
                    <div className="hori-bar"></div>
                    <h1>Ministry Team</h1>
                    <div className="hori-bar"></div>
                </div>
            </div>
            <div className="team-info">
                <img src="https://lh3.googleusercontent.com/f993wULJXGDR5QoVhmUbanrFqh6sWO-3IohB3xSCExCNY5b4fhB-sxzWJ7JEfn_CtTCTK8A811L-EybYDv_tp8ssAvB3UtpWeIjg0vwKQUrAWCTp46UcfLS9f-Bm_1v5OA=w1280" />
                <div className="team-info-text">
                    <p>Pastor Theunis Möller (Boet) has been with Calvary Chapel for 17 years.</p>
                    <p>He began the Calvary Chapel Durbanville plant in Dec 2018, along with his wife Ruth, and two daughters - Hannah and Penny.</p>
                    <p>He has a passion and a calling to teach the Word of God faithfully, and to make disciples for Jesus Christ in Durbanville, and beyond.</p>
                </div>
            </div>
        </div>
    );
}