import React from "react";
import "./giving.css";

export default function Giving({ }) {
    return (
        <div>
            <div className="giving-cover-image">
                <div className="welcome-message">
                    <div className="hori-bar"></div>
                    <h1>Giving</h1>
                    <div className="hori-bar"></div>
                </div>
            </div>
            <div className="giving-verses">
                <div className="giving-verse">
                    <h2>Luke 6:38</h2>
                    <p>“Give, and it will be given to you: good measure, pressed down, shaken together, and running over will be put into your bosom. For with the same measure that you use, it will be measured back to you.”</p>
                </div>
                <div className="giving-verse">
                    <h2>2 Corinthians 9:7</h2>
                    <p>"So let each one give as he purposes in his heart, not grudgingly or of necessity; for God loves a cheerful giver." </p>
                </div>
                <div className="giving-verse">
                    <h2>Matthew 6:3-4</h2>
                    <p>"But when you do a charitable deed, do not let your left hand know what your right hand is doing, "that your charitable deed may be in secret; and your Father who sees in secret will Himself reward you openly."</p>
                </div>
            </div>
            <div className="info-container">
                <div className="more-giving-info">
                    <h2>More about Finances</h2>
                    <p>At Calvary Chapel we view giving as an act of worship. God loves a cheerful giver because this act exemplifies the condition of a surrendered heart.</p>
                    <p>God also teaches that what is done in secret will be rewarded in the open. It is obvious that any church needs finances to function, but we choose not to make this the main thing, we do not use a collection plate and seldom mention money at our services. We trust worshippers who worship in Spirit and Truth to keep what is secret between the worshipper and God. In the same way the church board is trusted by the worshipper to handle such finance with Godly Stewardship. As an act of transparency, finance records therefor, are periodically made availabe for active church members to view on request. </p>
                </div>
                <div className="bank-details">
                    <h2>Account Details</h2>
                    <p><span style={{ fontFamily: 'custom3' }}>Bank: </span>Capitec</p>
                    <p><span style={{ fontFamily: 'custom3' }}>Account Type: </span>Savings</p>
                    <p><span style={{ fontFamily: 'custom3' }}>Account Number: </span>1676051714</p>
                    <p><span style={{ fontFamily: 'custom3' }}>Branch Code: </span>470010</p>
                </div>
            </div>
        </div>
    );
}