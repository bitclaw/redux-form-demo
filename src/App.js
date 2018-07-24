import React, { Component } from 'react';
//import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import RegisterForm from './components/RegisterForm'
import Message from './components/Message'
//import Footer from './components/Footer'


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Redux Form</h1>
                </header>
                <div className="Form-App">
                    <Message />
                    <RegisterForm />
                </div>
            </div>
        );
    }
}

export default App