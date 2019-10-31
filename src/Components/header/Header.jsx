import React, {Component} from 'react'
import header from '../../scss/header/header.scss'

export default class Content extends Component {
    time=()=>{
        let data=new Date();
        return data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds()
    };
    render(){

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
                    <p>Time:{this.time()}</p>
                </div>
            </div>
        </header>
    );
};
}