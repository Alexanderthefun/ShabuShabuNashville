import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./Home.css";

export const Home = () => {


    return (
        <div className="homeContainer">
            <img className='logoImage' src="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/277681587_369984165143824_9039545290505842571_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=be3454&_nc_ohc=AFPYlwMaChYAX8y7mZ5&_nc_ht=scontent-atl3-2.xx&oh=00_AfAbo8PxBQsqrPLkHOrj2pi6oeEJXsHpe0ywGpgxvJuBMg&oe=64DF6A3D" />
            <div className="content">
                <p>Shabu Shabu is a local, family friendly Hotpot & Grill restaurant located at <br/> 1722 West End Ave, Nashville, TN 37203</p>
                <p>Please visit the About page for more information.</p>
            </div>
            
        </div>
    )
}