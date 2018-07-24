import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import RegisterForm from './components/RegisterForm'
import Message from './components/Message'
import Footer from './components/Footer'


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Todo List</h1>
                </header>
                <Router>
                    <div className="Todo-App">
                        <Message />
                        <RegisterForm />
                        <Route path='/:filter?' render={({match}) => (
                            <TodoList filter = {match.params.filter} />
                        )} />
                        <Footer />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App