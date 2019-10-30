import React from 'react';
import {Header} from "../src/Components/Header/Header.jsx"
import Content from "../src/Components/Content/Content.jsx"
import {Footer} from "../src/Components/Footer/Footer.jsx"

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