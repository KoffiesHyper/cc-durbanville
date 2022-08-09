import React from "react";
import "./navbar.css";
import { useNavigate } from "react-router";

export default function NavBar({}){

    const navigate = useNavigate();

    return(
        <div className="navbar w-full bg-black h-16">
            <div className="nav-left items-center h-full">
                <img 
                src="https://lh5.googleusercontent.com/0TtVOZqJO3N-Q6uCQHoqfalLTPW1V2Ks5B0HZ-xDCoszYl4oL0rprIDigblCsOMfoeotSZ_MWjMy3GI5V3LoQFM=w16383"
                width={50}
                />
                <h2 className="text-white justify-self-start">CALVARY CHAPEL DURBANVILLE</h2>
            </div>
            <div className="nav-right">
                <button onClick={() => navigate('/')}>Home</button>
                <button onClick={() => navigate('/statement-of-faith')}>Statement of Faith</button>
                <button onClick={() => navigate('/book-club')}>Book Club</button>
                <button onClick={() => navigate('/team')}>Ministry Team</button>
                <button onClick={() => navigate('/giving')}>Giving</button>
            </div>
        </div>
    );
}