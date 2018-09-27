import React, { Component } from 'react'
import { Router } from 'react-router-dom'
import './App.css'
import Routes from './routes'
import history from './history'

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Routes />
      </Router>
    )
  }
}

export default App
