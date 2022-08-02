import React from "react";
import "./navbar.css";
import { useNavigate } from "react-router";

export default function NavBar({}){

    const navigate = useNavigate();

    return(
        <div className="navbar w-full bg-black h-16">
            <div className="nav-left items-center h-full">
                <img 
                src="https://static.wixstatic.com/media/21700f_4fe9bba072b746cab141a86d4b28edf8~mv2_d_1478_1300_s_2.png/v1/fit/w_2500,h_1330,al_c/~mv2_d_1478_1300_s_2.png"
                width={75}
                />
                <h2 className="text-white justify-self-start">CALVARY CHAPEL DURBANVILLE</h2>
            </div>
            <div className="nav-right">
                <button onClick={() => navigate('/')}>Home</button>
                <button onClick={() => navigate('/statement-of-faith')}>Statement of Faith</button>
                <button onClick={() => navigate('/team')}>Ministry Team</button>
                <button onClick={() => navigate('/giving')}>Giving</button>
            </div>
        </div>
    );
}