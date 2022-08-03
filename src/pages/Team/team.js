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
                <img src="https://lh4.googleusercontent.com/OL12YRmcOnhsxn4RjR9oQ8PfDN_7h2FI41IjVCfnzNhJyd6cCnBzSrcZKcdQsW_f0u_GmfVGyBAB-nG-hSNnujWoMK5SC-KWHw_OZlSfcR4voVP9VcuQ_v-836dsCWqb5A=w1280" />
                <div className="team-info-text">
                    <p>Pastor Theunis Möller (Boet) has been with Calvary Chapel for 17 years.</p>
                    <p>He began the Calvary Chapel Durbanville plant in Dec 2018, along with his wife Ruth, and two daughters - Hannah and Penny.</p>
                    <p>He has a passion and a calling to teach the Word of God faithfully, and to make disciples for Jesus Christ in Durbanville, and beyond.</p>
                </div>
            </div>
        </div>
    );
}