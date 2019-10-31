import React from 'react';
import Header from "./Components/header/Header.jsx"
import Content from "./Components/content/Content.jsx"
import {Footer} from "./Components/footer/Footer.jsx"

export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Content/>
                <Footer/>
            </div>
        );
    }
}