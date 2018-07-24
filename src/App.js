import React, { Component } from 'react';
//import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import RegisterForm from './components/RegisterForm'
import Message from './components/Message'
//import Footer from './components/Footer'


class App extends Component {
    submit = values => {
        window.alert(JSON.stringify(values,null,4))
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Redux Form</h1>
                </header>
                <div className="Form-App">
                    <Message />
                    <RegisterForm onSubmit={this.submit}/>
                </div>
            </div>
        );
    }
}

export default App