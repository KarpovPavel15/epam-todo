import React from 'react'
import header from '../../scss/Header/header.scss'

export const Header = () => {
    return (
        <header className="header-area">
            <div className="header-area_logo">
                <p>KPV</p>
            </div>
            <div className="header-area_name">
                <h1>ToDoApp</h1>
            </div>
            <div className="header-area_time">
                <div className="header-area_time-area">
                    Time
                </div>
            </div>
        </header>
    );
};